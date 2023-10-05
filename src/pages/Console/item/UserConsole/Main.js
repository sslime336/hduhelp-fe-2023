import {useEffect, useRef} from "react";
import Button from "../../../../components/Button";
import {ImageRefresh} from "../../../../resources";
import {UserListItem} from "./UserItem";
import uFuzzy from "@leeoniya/ufuzzy";

export function Main(
  {
    userList, setUserList, showUserInfo,
    selectAll, setSelectAll, refreshUserList,
    lastUpdateTime, paging, setPaging
  }) {

  const toggleAllSelections = () => {
    let userListShell = [...userList]
    userListShell.map(user => user.selected = !selectAll)
    setSelectAll(!selectAll)
    setUserList(userListShell)
  }

  useEffect(() => {
    document.title = '用户管理'
    refreshUserList()
  }, []);


  const buildUserList = (userList, onStageUserList) => {
    const buildUserListItem = (user, idx) => {
      let inPageIdx = idx + paging.currentIdx * paging.itemsPerPage
      return (
        <UserListItem index={inPageIdx} key={inPageIdx} user={user} onChange={() => {
          let userListShell = userList.map(shell => shell)
          userListShell[inPageIdx].selected = !userListShell[inPageIdx].selected
          if (userListShell[inPageIdx].selected === false) {
            setSelectAll(false)
          } else if (userListShell.findIndex(user => user.selected === false) === -1) {
            setSelectAll(true)
          }
          setUserList(userListShell)
        }} showInfo={() => showUserInfo(user)}/>
      )
    }
    if (fuzzyGuard.current === '') {
      return userList
        .slice(paging.currentIdx * paging.itemsPerPage, (paging.currentIdx + 1) * paging.itemsPerPage)
        .map((user, idx) => buildUserListItem(user, idx))
    }
    return onStageUserList
      .slice(paging.currentIdx * paging.itemsPerPage, (paging.currentIdx + 1) * paging.itemsPerPage)
      .map((user, idx) => buildUserListItem(user, idx))
  }

  const fuzzyGuard = useRef('');

  const fuzzySearch = (target) => {
    fuzzyGuard.current = target
    if (target === '') {
      refreshUserList()
      return;
    }
    // Unicode / universal (50%-75% slower)
    let opts = {
      unicode: true,
      interSplit: "[^\\p{L}\\d']+",
      intraSplit: "\\p{Ll}\\p{Lu}",
      intraBound: "\\p{L}\\d|\\d\\p{L}|\\p{Ll}\\p{Lu}",
      intraChars: "[\\p{L}\\d']",
      intraContr: "'\\p{L}{1,2}\\b",
    };
    let uf = new uFuzzy(opts)
    let haystack = [...userList].map(user => user.name)
    let matched = uf.filter(haystack, target)
    if (matched === null) {
      return
    }
    let shell = [...userList]
    shell.forEach(user => user.fuzzy = false)
    matched.forEach(idx => {
      shell[idx].fuzzy = true
    })
    setUserList(shell)
  }

  // 可显示的用户列表(Fuzzy查询的结果)
  let onStageUserList = fuzzyGuard.current === '' ? userList : userList.filter(user => user.fuzzy === true)

  useEffect(() => {
    if (paging.currentIdx + 1 > Math.ceil(onStageUserList.length / paging.itemsPerPage)) {
      let page = {...paging}
      page.currentIdx = 0
      setPaging(page)
    }
  }, [paging.itemsPerPage]);

  return (
    <div className='flex flex-col bg-white rounded shadow-sm'>
      <div className='flex border border-gray-100 bg-[#f9fafb] h-14 items-center'>
        <div className='flex ml-2 w-20'>
          <input type='checkbox' className='mt-1.5 h-4 w-4' checked={selectAll}
                 onChange={() => toggleAllSelections()}/>
          <label className='ml-1'>全选</label>
        </div>
        <input placeholder='输入关键词搜索' className='p-2 ml-2 flex w-30 border border-gray-300 rounded-sm'
               onChange={e => fuzzySearch(e.target.value)}
        />
        <div className='flex justify-end items-center w-full mr-4'>
          <p className='mr-4'>上次更新: {lastUpdateTime}</p>
          <Button onClick={() => refreshUserList()}><img src={ImageRefresh} alt='刷新'/></Button>
        </div>
      </div>

      <div className='grow-0 flex flex-col overflow-auto max-h-156'>
        {buildUserList(userList, onStageUserList)}
      </div>

      <div className='flex w-full border border-gray-100 bg-[#f9fafb] h-14 items-center p-2'>
        <p className='ml-2'>共 {onStageUserList.length} 项数据
        </p>
        <div className='grow flex justify-end items-center mr-4'>
          <p className='ml-2'>每页
            <select className='p-1 m-2 border-2 rounded-lg'
                    defaultValue='cnt15' onChange={e => {
              let itemsPerPage = parseInt(e.target.value.substring(3))
              let page = {...paging}
              page.itemsPerPage = itemsPerPage
              setPaging(page)
            }}>
              <option value='cnt5'>5</option>
              <option value='cnt15'>15</option>
              <option value='cnt30'>30</option>
            </select>
            条数据
          </p>

          {
            Math.ceil(onStageUserList.length / paging.itemsPerPage) > 0 ?
              (
                Math.ceil(onStageUserList.length / paging.itemsPerPage) < paging.currentIdx + 1 ?
                  <p className='ml-2'>第 1 页</p>
                  :
                  <p className='ml-2'>第 {paging.currentIdx + 1} 页</p>
              )
              :
              null
          }

          <p className='ml-2 mr-2'>共 {Math.ceil(onStageUserList.length / paging.itemsPerPage)} 页</p>
          <Button onClick={() => {
            setPaging({
              currentIdx: paging.currentIdx > 0 ? paging.currentIdx - 1 : 0,
              itemsPerPage: paging.itemsPerPage
            })
          }}>&lt;</Button>
          <Button onClick={() => {
            let maxPage = Math.ceil(onStageUserList.length / paging.itemsPerPage)
            setPaging({
              currentIdx: paging.currentIdx < maxPage - 1 ? paging.currentIdx + 1 : maxPage - 1,
              itemsPerPage: paging.itemsPerPage
            })
          }}>&gt; </Button>
        </div>
      </div>
    </div>
  )
}


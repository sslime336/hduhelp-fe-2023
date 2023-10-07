package main

import (
	"errors"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"strconv"
)

type UserUpdateReq struct {
	StaffId string   `json:"staff_id"`
	Name    string   `json:"name"`
	Phone   string   `json:"phone"`
	Email   string   `json:"email"`
	Tags    []string `json:"tags"`
}

func GetUsers(c *gin.Context) {
	c.JSON(200, func() []User {
		var userList []User
		for _, user := range Users {
			if user.Removed {
				continue
			}
			userList = append(userList, user)
		}
		return userList
	}())
}

func DeleteUser(c *gin.Context) {
	id := c.Param("id")
	if id == "" {
		return
	}
	for idx, user := range Users {
		if user.Id == id {
			Users[idx].Removed = true
			c.JSON(200, "ok")
			return
		}
	}
}

func UpdateUser(c *gin.Context) {
	id := c.Param("id")
	if id == "" {
		c.JSON(200, "user id is required")
	}
	var req UserUpdateReq
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(401, "param is wrong")
	}
	if err := updateUser(id, &req); err != nil {
		c.JSON(200, err)
	}
	c.JSON(200, "ok")
	return
}

func updateUser(id string, u *UserUpdateReq) error {
	idx, err := strconv.Atoi(id)
	if err != nil {
		return errors.New("用户ID非法")
	}
	idx--
	Users[idx].StaffId = u.StaffId
	Users[idx].Name = u.Name
	Users[idx].Phone = u.Phone
	Users[idx].Email = u.Email
	Users[idx].Tags = u.Tags
	Users[idx].UpdateTime = getTime()
	return nil
}

type NewUserReq struct {
	StaffId string   `json:"staff_id"`
	Name    string   `json:"name"`
	Phone   string   `json:"phone"`
	Email   string   `json:"email"`
	Tags    []string `json:"tags"`
}

func NewUser(c *gin.Context) {
	var req NewUserReq
	if c.ShouldBindJSON(&req) != nil {
		c.JSON(401, "参数错误")
		return
	}
	Users = append(Users, User{
		Id:         uuid.NewString(),
		StaffId:    req.StaffId,
		Name:       req.Name,
		Phone:      req.Phone,
		Email:      req.Email,
		Tags:       req.Tags,
		UpdateTime: getTime(),
		Removed:    false,
	})
	c.Status(200)
}

func ResetData(c *gin.Context) {
	Users = append([]User(nil), backup...)
	c.JSON(200, "用户已重置")
}

package main

import (
	"github.com/gin-gonic/gin"
)

type LoginReq struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func Login(c *gin.Context) {
	var req LoginReq
	if err := c.ShouldBindJSON(&req); err != nil {
		c.AbortWithStatusJSON(401, "参数错误")
	}

	if req.Username == "slime" && req.Password == "123456" {
		c.JSON(200, gin.H{
			"token":    "927721",
			"staff_id": "这是个8位学工号",
			"name":     "slime",
			"role":     "超级管理员",
		})
	} else {
		c.JSON(200, gin.H{
			"token":    "",
			"staff_id": "Unknown",
			"name":     "Unknown",
			"role":     "Unknown",
		})
	}
}

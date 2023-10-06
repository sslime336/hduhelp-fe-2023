package main

import (
	"github.com/gin-gonic/gin"
	"log"
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
			"staff_id": "00000000",
			"name":     "slime",
			"role":     "超级管理员",
		})
	}
	log.Println("userHandler")
}

package main

import "github.com/gin-gonic/gin"

func makeRoute(engine *gin.Engine) {
	r := engine.Group("/")
	{
		r.GET("/users", GetUsers)
		r.DELETE("/user/:id", DeleteUser)
		r.PATCH("/user/:id", UpdateUser)
		r.POST("/user", NewUser)
		r.POST("/login", Login)
		r.POST("/reset", ResetData)
	}
}

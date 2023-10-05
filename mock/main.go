package main

import (
	"github.com/gin-gonic/gin"
	"log"
)

func main() {
	engine := gin.Default()

	engine.Use(AllowCors)
	makeRoute(engine)

	log.Fatalln(engine.Run(":8089"))
}

package main

import (
	"log"

	ws "deltagrid/pkg/ws"
)

func main() {
	hub := ws.Hub{Dummy: "Daniel"}
	log.Println("It Works:", hub.Dummy)
}

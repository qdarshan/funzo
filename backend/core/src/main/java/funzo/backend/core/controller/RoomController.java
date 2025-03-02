package funzo.backend.core.controller;

import funzo.backend.core.model.Room;
import funzo.backend.core.service.RoomService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5173")
public class RoomController {

    RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping("/room")
    public String createRoom() {
        return "room";
    }

    @PostMapping("/room/{id}/join")
    public boolean joinRoom(@PathVariable String id) {
        return roomService.joinRoom(id);
    }

    @GetMapping("/room/{id}")
    public Room getRoom(@PathVariable String id) {
        return roomService.getRoom(id);
    }
}


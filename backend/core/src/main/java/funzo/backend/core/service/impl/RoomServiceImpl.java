package funzo.backend.core.service.impl;

import funzo.backend.core.model.Room;
import funzo.backend.core.service.RoomService;

import java.util.ArrayList;
import java.util.List;

public class RoomServiceImpl implements RoomService {

    List<Room> rooms = new ArrayList<>();

    public RoomServiceImpl() {
        rooms.add(new Room("1", "Room 1", "1", true, true));
        rooms.add(new Room("2", "Room 2", "1", true, true));
        rooms.add(new Room("3", "Room 3", "1", true, true));
    }

    @Override
    public Room getRoom(String id) {
        return rooms.stream().filter(room -> room.getId().equals(id)).findFirst().orElse(null);
    }

    @Override
    public boolean joinRoom(String id) {
        return false;
    }
}

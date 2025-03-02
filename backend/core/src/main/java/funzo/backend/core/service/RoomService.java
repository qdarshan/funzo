package funzo.backend.core.service;

import funzo.backend.core.model.Room;

public interface RoomService {


    Room getRoom(String id);
    boolean joinRoom(String id);
}

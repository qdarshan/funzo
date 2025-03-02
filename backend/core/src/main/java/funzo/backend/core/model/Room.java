package funzo.backend.core.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Room {

    private String id;
    private String name;
    private String ownerId;
    private boolean isActive;
    private boolean isPrivate;
}

package fr.fragnier.drawio.webapi;

import fr.fragnier.drawio.webapi.fs.MountPath;
import fr.fragnier.drawio.webapi.fs.MountResourceRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("mount-path")
public class MountPathController {

    @Autowired
    private MountResourceRegistry mountResourceRegistry;

    @PostMapping(path = "list")
    List<MountPath> list(@RequestBody MountPath path) {
        return mountResourceRegistry.list(path);
    }

    @GetMapping(path = "root-content")
    List<MountPath> rootContent() {
        return Collections.singletonList(mountResourceRegistry.getRoot("toto"));
    }
}

package fr.fragnier.drawio.webapi.fs;

import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class MountResourceRegistry {

    private final Map<String, MountResourceRegistration> registrations = new HashMap<>();

    public void addFileResource(MountResourceRegistration resourceRegistration) {
        if(registrations.containsKey(resourceRegistration.getId())) {
            throw new RuntimeException(String.format("Une %s existe déjà avec l'id %s",
                    MountResourceRegistration.class.getSimpleName(), resourceRegistration.getId()));
        }

        // TODO valider que l'id est non null
        // TODO valider que le File est un dossier existant
        // TODO valider que si le name existe, alors il est unique

        registrations.put(resourceRegistration.getId(), resourceRegistration);
    }

    public MountPath getRoot(String mountId) {
        MountResourceRegistration registration = getMountResourceRegistration(mountId);

        MountPath mountPath = new MountPath();
        mountPath.setMountId(mountId);
        mountPath.setName(Optional.ofNullable(registration.getName()).orElse(registration.getId()));
        mountPath.setParentPath(null);
        mountPath.setType(MountPath.PathType.DIRECTORY);
        return mountPath;
    }

    private MountResourceRegistration getMountResourceRegistration(String mountId) {
        MountResourceRegistration registration = registrations.get(mountId);
        if(registration == null) {
            throw new RuntimeException(String.format("Aucune %s n'existe avec l'id %s",
                    MountResourceRegistration.class.getSimpleName(), mountId
                    ));
        }
        return registration;
    }

    public List<MountPath> list(MountPath mountPath) {
        MountResourceRegistration registration = getMountResourceRegistration(mountPath.getMountId());
        Path parentPath = registration.getRootDirectory().toPath();
        if(mountPath.getParentPath() != null) {
            parentPath = parentPath.resolve(mountPath.getName());
        }

        if(!Files.isDirectory(parentPath)) {
            throw new RuntimeException(String.format("%s ne peut pas être listé car n'est pas un dossier.",
                    mountPath));
        }

        final Path finalParentPath = parentPath;
        try {
            return Files.list(finalParentPath).map(childPath -> {
                MountPath child = new MountPath();
                child.setMountId(mountPath.getMountId());
                child.setParentPath(childPath.relativize(finalParentPath).toString());
                child.setType(Files.isDirectory(childPath) ? MountPath.PathType.DIRECTORY : MountPath.PathType.FILE);
                child.setName(childPath.getFileName().toString());
                return child;
            }).collect(Collectors.toList());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}

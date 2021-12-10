package fr.fragnier.drawio.webapi.fs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.io.File;

@Configuration
public class MountResourceConfiguration {

    // TODO mettre en place configuration par properties
    @Autowired
    public MountResourceConfiguration(MountResourceRegistry registry) {
        MountResourceRegistration registration = new MountResourceRegistration();
        registration.setId("toto");
        registration.setRootDirectory(new File("/tmp"));

        registry.addFileResource(registration);
    }
}

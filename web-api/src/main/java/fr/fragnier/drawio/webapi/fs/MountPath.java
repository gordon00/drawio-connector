package fr.fragnier.drawio.webapi.fs;

public class MountPath {
    private String mountId;
    private String parentPath;
    private String name;
    private PathType type;

    public String getMountId() {
        return mountId;
    }

    public void setMountId(String mountId) {
        this.mountId = mountId;
    }

    public String getParentPath() {
        return parentPath;
    }

    public void setParentPath(String parentPath) {
        this.parentPath = parentPath;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public PathType getType() {
        return type;
    }

    public void setType(PathType type) {
        this.type = type;
    }

    public enum PathType {
        DIRECTORY,
        FILE;
    }

    @Override
    public String toString() {
        return "MountPath{" +
                "mountId='" + mountId + '\'' +
                ", parentPath='" + parentPath + '\'' +
                ", name='" + name + '\'' +
                ", type=" + type +
                '}';
    }
}

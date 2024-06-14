// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * A wildcarded AtlasEntryId that can be used to match multiple AtlasEntry
 * objects.
 */
public class AtlasEntryIdWildcard {
    @JsonValue
    private String value;

    public AtlasEntryIdWildcard() {
    }

    @JsonCreator
    public AtlasEntryIdWildcard(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}

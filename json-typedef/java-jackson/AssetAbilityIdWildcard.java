// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * A wildcarded AssetAbilityId that can be used to match multiple AssetAbility
 * objects.
 */
public class AssetAbilityIdWildcard {
    @JsonValue
    private String value;

    public AssetAbilityIdWildcard() {
    }

    @JsonCreator
    public AssetAbilityIdWildcard(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}

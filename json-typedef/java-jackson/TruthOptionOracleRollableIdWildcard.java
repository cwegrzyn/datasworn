// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * A wildcarded TruthOptionOracleRollableId that can be used to match multiple
 * TruthOptionOracleRollable objects.
 */
public class TruthOptionOracleRollableIdWildcard {
    @JsonValue
    private String value;

    public TruthOptionOracleRollableIdWildcard() {
    }

    @JsonCreator
    public TruthOptionOracleRollableIdWildcard(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}

// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

/**
 * An arbitrary static integer value with a label.
 */
@JsonSerialize
public class CustomValue {
    @JsonProperty("label")
    private Label label;

    @JsonProperty("using")
    private CustomValueUsing using;

    @JsonProperty("value")
    private Short value;

    public CustomValue() {
    }

    /**
     * Getter for label.<p>
     */
    public Label getLabel() {
        return label;
    }

    /**
     * Setter for label.<p>
     */
    public void setLabel(Label label) {
        this.label = label;
    }

    /**
     * Getter for using.<p>
     * An arbitrary static integer value with a label.
     */
    public CustomValueUsing getUsing() {
        return using;
    }

    /**
     * Setter for using.<p>
     * An arbitrary static integer value with a label.
     */
    public void setUsing(CustomValueUsing using) {
        this.using = using;
    }

    /**
     * Getter for value.<p>
     */
    public Short getValue() {
        return value;
    }

    /**
     * Setter for value.<p>
     */
    public void setValue(Short value) {
        this.value = value;
    }
}

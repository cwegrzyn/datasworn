// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class OracleRollableTableTableText2ColumnLabels {
    @JsonProperty("roll")
    private Label roll;

    @JsonProperty("text")
    private Label text;

    @JsonProperty("text2")
    private Label text2;

    public OracleRollableTableTableText2ColumnLabels() {
    }

    /**
     * Getter for roll.<p>
     */
    public Label getRoll() {
        return roll;
    }

    /**
     * Setter for roll.<p>
     */
    public void setRoll(Label roll) {
        this.roll = roll;
    }

    /**
     * Getter for text.<p>
     */
    public Label getText() {
        return text;
    }

    /**
     * Setter for text.<p>
     */
    public void setText(Label text) {
        this.text = text;
    }

    /**
     * Getter for text2.<p>
     */
    public Label getText2() {
        return text2;
    }

    /**
     * Setter for text2.<p>
     */
    public void setText2(Label text2) {
        this.text2 = text2;
    }
}

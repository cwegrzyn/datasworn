// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

@JsonSerialize
public class TriggerOptionProgress {
    @JsonProperty("method")
    private MoveRollMethod method;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("by")
    private TriggerBy by;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("choices")
    private List<TriggerOptionProgressChoice> choices;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("text")
    private MarkdownString text;

    public TriggerOptionProgress() {
    }

    /**
     * Getter for method.<p>
     */
    public MoveRollMethod getMethod() {
        return method;
    }

    /**
     * Setter for method.<p>
     */
    public void setMethod(MoveRollMethod method) {
        this.method = method;
    }

    /**
     * Getter for by.<p>
     */
    public TriggerBy getBy() {
        return by;
    }

    /**
     * Setter for by.<p>
     */
    public void setBy(TriggerBy by) {
        this.by = by;
    }

    /**
     * Getter for choices.<p>
     */
    public List<TriggerOptionProgressChoice> getChoices() {
        return choices;
    }

    /**
     * Setter for choices.<p>
     */
    public void setChoices(List<TriggerOptionProgressChoice> choices) {
        this.choices = choices;
    }

    /**
     * Getter for text.<p>
     */
    public MarkdownString getText() {
        return text;
    }

    /**
     * Setter for text.<p>
     */
    public void setText(MarkdownString text) {
        this.text = text;
    }
}

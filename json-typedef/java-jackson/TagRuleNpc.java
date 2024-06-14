// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

@JsonSerialize
public class TagRuleNpc extends TagRule {
    @JsonProperty("applies_to")
    private List<TaggableNodeType> appliesTo;

    @JsonProperty("description")
    private MarkdownString description;

    @JsonProperty("wildcard")
    private Boolean wildcard;

    public TagRuleNpc() {
    }

    /**
     * Getter for appliesTo.<p>
     */
    public List<TaggableNodeType> getAppliesTo() {
        return appliesTo;
    }

    /**
     * Setter for appliesTo.<p>
     */
    public void setAppliesTo(List<TaggableNodeType> appliesTo) {
        this.appliesTo = appliesTo;
    }

    /**
     * Getter for description.<p>
     */
    public MarkdownString getDescription() {
        return description;
    }

    /**
     * Setter for description.<p>
     */
    public void setDescription(MarkdownString description) {
        this.description = description;
    }

    /**
     * Getter for wildcard.<p>
     * If `true`, this field accepts an array of wildcard ID strings. If
     * `false`, this field accepts a single non-wildcard ID string.
     */
    public Boolean getWildcard() {
        return wildcard;
    }

    /**
     * Setter for wildcard.<p>
     * If `true`, this field accepts an array of wildcard ID strings. If
     * `false`, this field accepts a single non-wildcard ID string.
     */
    public void setWildcard(Boolean wildcard) {
        this.wildcard = wildcard;
    }
}

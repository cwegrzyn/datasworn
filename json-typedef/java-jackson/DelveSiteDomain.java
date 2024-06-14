// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

/**
 * A delve site Domain card.
 */
@JsonSerialize
public class DelveSiteDomain {
    @JsonProperty("_id")
    private DelveSiteDomainId id;

    @JsonProperty("_source")
    private SourceInfo source;

    @JsonProperty("dangers")
    private List<DelveSiteDomainDanger> dangers;

    @JsonProperty("features")
    private List<DelveSiteDomainFeature> features;

    @JsonProperty("name")
    private Label name;

    @JsonProperty("summary")
    private MarkdownString summary;

    @JsonProperty("type")
    private DelveSiteDomainType type;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("_comment")
    private String comment;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("canonical_name")
    private Label canonicalName;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("description")
    private MarkdownString description;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("name_oracle")
    private OracleRollableId nameOracle;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("suggestions")
    private Suggestions suggestions;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("tags")
    private Tags tags;

    public DelveSiteDomain() {
    }

    /**
     * Getter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public DelveSiteDomainId getId() {
        return id;
    }

    /**
     * Setter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public void setId(DelveSiteDomainId id) {
        this.id = id;
    }

    /**
     * Getter for source.<p>
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    public SourceInfo getSource() {
        return source;
    }

    /**
     * Setter for source.<p>
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    public void setSource(SourceInfo source) {
        this.source = source;
    }

    /**
     * Getter for dangers.<p>
     */
    public List<DelveSiteDomainDanger> getDangers() {
        return dangers;
    }

    /**
     * Setter for dangers.<p>
     */
    public void setDangers(List<DelveSiteDomainDanger> dangers) {
        this.dangers = dangers;
    }

    /**
     * Getter for features.<p>
     */
    public List<DelveSiteDomainFeature> getFeatures() {
        return features;
    }

    /**
     * Setter for features.<p>
     */
    public void setFeatures(List<DelveSiteDomainFeature> features) {
        this.features = features;
    }

    /**
     * Getter for name.<p>
     * The primary name/label for this item.
     */
    public Label getName() {
        return name;
    }

    /**
     * Setter for name.<p>
     * The primary name/label for this item.
     */
    public void setName(Label name) {
        this.name = name;
    }

    /**
     * Getter for summary.<p>
     */
    public MarkdownString getSummary() {
        return summary;
    }

    /**
     * Setter for summary.<p>
     */
    public void setSummary(MarkdownString summary) {
        this.summary = summary;
    }

    /**
     * Getter for type.<p>
     */
    public DelveSiteDomainType getType() {
        return type;
    }

    /**
     * Setter for type.<p>
     */
    public void setType(DelveSiteDomainType type) {
        this.type = type;
    }

    /**
     * Getter for comment.<p>
     * Implementation hints or other developer-facing comments on this object.
     * These should be omitted when presenting the object for gameplay.
     */
    public String getComment() {
        return comment;
    }

    /**
     * Setter for comment.<p>
     * Implementation hints or other developer-facing comments on this object.
     * These should be omitted when presenting the object for gameplay.
     */
    public void setComment(String comment) {
        this.comment = comment;
    }

    /**
     * Getter for canonicalName.<p>
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    public Label getCanonicalName() {
        return canonicalName;
    }

    /**
     * Setter for canonicalName.<p>
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    public void setCanonicalName(Label canonicalName) {
        this.canonicalName = canonicalName;
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
     * Getter for nameOracle.<p>
     * An oracle table ID containing place name elements. For examples, see
     * oracle ID `oracle_rollable:delve/site_name/place/barrow`, and its siblings
     * in oracle collection ID `oracle_collection:delve/site_name/place`.
     * These oracles are used by the site name oracle from Ironsworn: Delve
     * (`oracle_rollable:delve/site_name/format`) to create random names for
     * delve sites.
     */
    public OracleRollableId getNameOracle() {
        return nameOracle;
    }

    /**
     * Setter for nameOracle.<p>
     * An oracle table ID containing place name elements. For examples, see
     * oracle ID `oracle_rollable:delve/site_name/place/barrow`, and its siblings
     * in oracle collection ID `oracle_collection:delve/site_name/place`.
     * These oracles are used by the site name oracle from Ironsworn: Delve
     * (`oracle_rollable:delve/site_name/format`) to create random names for
     * delve sites.
     */
    public void setNameOracle(OracleRollableId nameOracle) {
        this.nameOracle = nameOracle;
    }

    /**
     * Getter for suggestions.<p>
     */
    public Suggestions getSuggestions() {
        return suggestions;
    }

    /**
     * Setter for suggestions.<p>
     */
    public void setSuggestions(Suggestions suggestions) {
        this.suggestions = suggestions;
    }

    /**
     * Getter for tags.<p>
     */
    public Tags getTags() {
        return tags;
    }

    /**
     * Setter for tags.<p>
     */
    public void setTags(Tags tags) {
        this.tags = tags;
    }
}

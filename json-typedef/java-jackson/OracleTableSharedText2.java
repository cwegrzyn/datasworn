// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;
import java.util.Map;

/**
 * An OracleCollection representing a single table with multiple roll columns,
 * and 2 shared text columns.
 */
@JsonSerialize
public class OracleTableSharedText2 {
    @JsonProperty("_id")
    private OracleCollectionId id;

    @JsonProperty("_source")
    private SourceInfo source;

    @JsonProperty("column_labels")
    private OracleTableSharedText2ColumnLabels columnLabels;

    @JsonProperty("contents")
    private Map<String, OracleColumnText2> contents;

    @JsonProperty("name")
    private Label name;

    @JsonProperty("oracle_type")
    private OracleTableSharedText2OracleType oracleType;

    @JsonProperty("type")
    private OracleTableSharedText2Type type;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("_comment")
    private String comment;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("canonical_name")
    private Label canonicalName;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("color")
    private CssColor color;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("description")
    private MarkdownString description;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("enhances")
    private List<OracleCollectionIdWildcard> enhances;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("icon")
    private SvgImageUrl icon;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("images")
    private List<WebpImageUrl> images;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("replaces")
    private List<OracleCollectionIdWildcard> replaces;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("suggestions")
    private Suggestions suggestions;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("summary")
    private MarkdownString summary;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("tags")
    private Tags tags;

    public OracleTableSharedText2() {
    }

    /**
     * Getter for id.<p>
     * The unique Datasworn ID for this node.
     */
    public OracleCollectionId getId() {
        return id;
    }

    /**
     * Setter for id.<p>
     * The unique Datasworn ID for this node.
     */
    public void setId(OracleCollectionId id) {
        this.id = id;
    }

    /**
     * Getter for source.<p>
     * Attribution for the original source (such as a book or website) of this
     * node, including the author and licensing information.
     */
    public SourceInfo getSource() {
        return source;
    }

    /**
     * Setter for source.<p>
     * Attribution for the original source (such as a book or website) of this
     * node, including the author and licensing information.
     */
    public void setSource(SourceInfo source) {
        this.source = source;
    }

    /**
     * Getter for columnLabels.<p>
     */
    public OracleTableSharedText2ColumnLabels getColumnLabels() {
        return columnLabels;
    }

    /**
     * Setter for columnLabels.<p>
     */
    public void setColumnLabels(OracleTableSharedText2ColumnLabels columnLabels) {
        this.columnLabels = columnLabels;
    }

    /**
     * Getter for contents.<p>
     */
    public Map<String, OracleColumnText2> getContents() {
        return contents;
    }

    /**
     * Setter for contents.<p>
     */
    public void setContents(Map<String, OracleColumnText2> contents) {
        this.contents = contents;
    }

    /**
     * Getter for name.<p>
     * The primary name/label for this node.
     */
    public Label getName() {
        return name;
    }

    /**
     * Setter for name.<p>
     * The primary name/label for this node.
     */
    public void setName(Label name) {
        this.name = name;
    }

    /**
     * Getter for oracleType.<p>
     */
    public OracleTableSharedText2OracleType getOracleType() {
        return oracleType;
    }

    /**
     * Setter for oracleType.<p>
     */
    public void setOracleType(OracleTableSharedText2OracleType oracleType) {
        this.oracleType = oracleType;
    }

    /**
     * Getter for type.<p>
     */
    public OracleTableSharedText2Type getType() {
        return type;
    }

    /**
     * Setter for type.<p>
     */
    public void setType(OracleTableSharedText2Type type) {
        this.type = type;
    }

    /**
     * Getter for comment.<p>
     * Implementation hints or other developer-facing comments on this node.
     * These should be omitted when presenting the node for gameplay.
     */
    public String getComment() {
        return comment;
    }

    /**
     * Setter for comment.<p>
     * Implementation hints or other developer-facing comments on this node.
     * These should be omitted when presenting the node for gameplay.
     */
    public void setComment(String comment) {
        this.comment = comment;
    }

    /**
     * Getter for canonicalName.<p>
     * The name of this node as it appears on the page in the book, if it's
     * different from `name`.
     */
    public Label getCanonicalName() {
        return canonicalName;
    }

    /**
     * Setter for canonicalName.<p>
     * The name of this node as it appears on the page in the book, if it's
     * different from `name`.
     */
    public void setCanonicalName(Label canonicalName) {
        this.canonicalName = canonicalName;
    }

    /**
     * Getter for color.<p>
     * A thematic color associated with this node.
     */
    public CssColor getColor() {
        return color;
    }

    /**
     * Setter for color.<p>
     * A thematic color associated with this node.
     */
    public void setColor(CssColor color) {
        this.color = color;
    }

    /**
     * Getter for description.<p>
     * A longer description of this collection, which might include multiple
     * paragraphs. If it's only a couple sentences, use the `summary` key
     * instead.
     */
    public MarkdownString getDescription() {
        return description;
    }

    /**
     * Setter for description.<p>
     * A longer description of this collection, which might include multiple
     * paragraphs. If it's only a couple sentences, use the `summary` key
     * instead.
     */
    public void setDescription(MarkdownString description) {
        this.description = description;
    }

    /**
     * Getter for enhances.<p>
     * This node's content enhances all nodes that match these wildcards, rather
     * than being a standalone item of its own.
     */
    public List<OracleCollectionIdWildcard> getEnhances() {
        return enhances;
    }

    /**
     * Setter for enhances.<p>
     * This node's content enhances all nodes that match these wildcards, rather
     * than being a standalone item of its own.
     */
    public void setEnhances(List<OracleCollectionIdWildcard> enhances) {
        this.enhances = enhances;
    }

    /**
     * Getter for icon.<p>
     * An SVG icon associated with this collection.
     */
    public SvgImageUrl getIcon() {
        return icon;
    }

    /**
     * Setter for icon.<p>
     * An SVG icon associated with this collection.
     */
    public void setIcon(SvgImageUrl icon) {
        this.icon = icon;
    }

    /**
     * Getter for images.<p>
     */
    public List<WebpImageUrl> getImages() {
        return images;
    }

    /**
     * Setter for images.<p>
     */
    public void setImages(List<WebpImageUrl> images) {
        this.images = images;
    }

    /**
     * Getter for replaces.<p>
     * This node replaces all nodes that match these wildcards. References to
     * the replaced nodes can be considered equivalent to this node.
     */
    public List<OracleCollectionIdWildcard> getReplaces() {
        return replaces;
    }

    /**
     * Setter for replaces.<p>
     * This node replaces all nodes that match these wildcards. References to
     * the replaced nodes can be considered equivalent to this node.
     */
    public void setReplaces(List<OracleCollectionIdWildcard> replaces) {
        this.replaces = replaces;
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
     * Getter for summary.<p>
     * A brief summary of this collection, no more than a few sentences in
     * length. This is intended for use in application tooltips and similar
     * sorts of hints. Longer text should use the "description" key instead.
     */
    public MarkdownString getSummary() {
        return summary;
    }

    /**
     * Setter for summary.<p>
     * A brief summary of this collection, no more than a few sentences in
     * length. This is intended for use in application tooltips and similar
     * sorts of hints. Longer text should use the "description" key instead.
     */
    public void setSummary(MarkdownString summary) {
        this.summary = summary;
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

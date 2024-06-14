// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

/**
 * A rollable oracle table with one roll column and 3 text columns.
 */
@JsonSerialize
public class OracleTableRollableTableText3 extends OracleTableRollable {
    @JsonProperty("_id")
    private OracleRollableId id;

    @JsonProperty("_source")
    private SourceInfo source;

    @JsonProperty("column_labels")
    private OracleTableRollableTableText3ColumnLabels columnLabels;

    @JsonProperty("dice")
    private DiceExpression dice;

    @JsonProperty("name")
    private Label name;

    @JsonProperty("rows")
    private List<OracleRollableRowText3> rows;

    @JsonProperty("type")
    private OracleTableRollableTableText3Type type;

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
    @JsonProperty("icon")
    private SvgImageUrl icon;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("match")
    private OracleMatchBehavior match;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("recommended_rolls")
    private OracleTableRollableTableText3RecommendedRolls recommendedRolls;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("replaces")
    private List<OracleRollableIdWildcard> replaces;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("suggestions")
    private Suggestions suggestions;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("summary")
    private MarkdownString summary;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("tags")
    private Tags tags;

    public OracleTableRollableTableText3() {
    }

    /**
     * Getter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public OracleRollableId getId() {
        return id;
    }

    /**
     * Setter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public void setId(OracleRollableId id) {
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
     * Getter for columnLabels.<p>
     * The label at the head of each table column. The `roll` key refers to the
     * roll column showing the dice range (`min` and `max` on each table row).
     */
    public OracleTableRollableTableText3ColumnLabels getColumnLabels() {
        return columnLabels;
    }

    /**
     * Setter for columnLabels.<p>
     * The label at the head of each table column. The `roll` key refers to the
     * roll column showing the dice range (`min` and `max` on each table row).
     */
    public void setColumnLabels(OracleTableRollableTableText3ColumnLabels columnLabels) {
        this.columnLabels = columnLabels;
    }

    /**
     * Getter for dice.<p>
     * The roll used to select a result on this oracle.
     */
    public DiceExpression getDice() {
        return dice;
    }

    /**
     * Setter for dice.<p>
     * The roll used to select a result on this oracle.
     */
    public void setDice(DiceExpression dice) {
        this.dice = dice;
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
     * Getter for rows.<p>
     * An array of objects, each representing a single row of the table.
     */
    public List<OracleRollableRowText3> getRows() {
        return rows;
    }

    /**
     * Setter for rows.<p>
     * An array of objects, each representing a single row of the table.
     */
    public void setRows(List<OracleRollableRowText3> rows) {
        this.rows = rows;
    }

    /**
     * Getter for type.<p>
     */
    public OracleTableRollableTableText3Type getType() {
        return type;
    }

    /**
     * Setter for type.<p>
     */
    public void setType(OracleTableRollableTableText3Type type) {
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
     * A longer description of the oracle table's intended usage, which might
     * include multiple paragraphs. If it's only a couple sentences, use the
     * `summary` key instead.
     */
    public MarkdownString getDescription() {
        return description;
    }

    /**
     * Setter for description.<p>
     * A longer description of the oracle table's intended usage, which might
     * include multiple paragraphs. If it's only a couple sentences, use the
     * `summary` key instead.
     */
    public void setDescription(MarkdownString description) {
        this.description = description;
    }

    /**
     * Getter for icon.<p>
     * An icon that represents this table.
     */
    public SvgImageUrl getIcon() {
        return icon;
    }

    /**
     * Setter for icon.<p>
     * An icon that represents this table.
     */
    public void setIcon(SvgImageUrl icon) {
        this.icon = icon;
    }

    /**
     * Getter for match.<p>
     * Most oracle tables are insensitive to matches, but a few define special
     * match behavior.
     */
    public OracleMatchBehavior getMatch() {
        return match;
    }

    /**
     * Setter for match.<p>
     * Most oracle tables are insensitive to matches, but a few define special
     * match behavior.
     */
    public void setMatch(OracleMatchBehavior match) {
        this.match = match;
    }

    /**
     * Getter for recommendedRolls.<p>
     */
    public OracleTableRollableTableText3RecommendedRolls getRecommendedRolls() {
        return recommendedRolls;
    }

    /**
     * Setter for recommendedRolls.<p>
     */
    public void setRecommendedRolls(OracleTableRollableTableText3RecommendedRolls recommendedRolls) {
        this.recommendedRolls = recommendedRolls;
    }

    /**
     * Getter for replaces.<p>
     * Indicates that this object replaces the identified OracleRollables.
     * References to the replaced objects can be considered equivalent to this
     * object.
     */
    public List<OracleRollableIdWildcard> getReplaces() {
        return replaces;
    }

    /**
     * Setter for replaces.<p>
     * Indicates that this object replaces the identified OracleRollables.
     * References to the replaced objects can be considered equivalent to this
     * object.
     */
    public void setReplaces(List<OracleRollableIdWildcard> replaces) {
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
     * A brief summary of the oracle table's intended usage, no more than a few
     * sentences in length. This is intended for use in application tooltips
     * and similar sorts of hints. Longer text should use the "description"
     * key instead.
     */
    public MarkdownString getSummary() {
        return summary;
    }

    /**
     * Setter for summary.<p>
     * A brief summary of the oracle table's intended usage, no more than a few
     * sentences in length. This is intended for use in application tooltips
     * and similar sorts of hints. Longer text should use the "description"
     * key instead.
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

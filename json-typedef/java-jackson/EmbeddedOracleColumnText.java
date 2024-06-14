// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

@JsonSerialize
public class EmbeddedOracleColumnText {
    @JsonProperty("_id")
    private EmbeddedOracleRollableId id;

    @JsonProperty("dice")
    private DiceExpression dice;

    @JsonProperty("name")
    private Label name;

    @JsonProperty("oracle_type")
    private EmbeddedOracleColumnTextOracleType oracleType;

    @JsonProperty("rows")
    private List<OracleRollableRowText> rows;

    @JsonProperty("type")
    private EmbeddedOracleColumnTextType type;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("_comment")
    private String comment;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("color")
    private CssColor color;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("icon")
    private SvgImageUrl icon;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("match")
    private OracleMatchBehavior match;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("suggestions")
    private Suggestions suggestions;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("summary")
    private MarkdownString summary;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("tags")
    private Tags tags;

    public EmbeddedOracleColumnText() {
    }

    /**
     * Getter for id.<p>
     */
    public EmbeddedOracleRollableId getId() {
        return id;
    }

    /**
     * Setter for id.<p>
     */
    public void setId(EmbeddedOracleRollableId id) {
        this.id = id;
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
     * The primary label at the head of this column.
     */
    public Label getName() {
        return name;
    }

    /**
     * Setter for name.<p>
     * The primary label at the head of this column.
     */
    public void setName(Label name) {
        this.name = name;
    }

    /**
     * Getter for oracleType.<p>
     */
    public EmbeddedOracleColumnTextOracleType getOracleType() {
        return oracleType;
    }

    /**
     * Setter for oracleType.<p>
     */
    public void setOracleType(EmbeddedOracleColumnTextOracleType oracleType) {
        this.oracleType = oracleType;
    }

    /**
     * Getter for rows.<p>
     * An array of objects, each representing a single row of the table.
     */
    public List<OracleRollableRowText> getRows() {
        return rows;
    }

    /**
     * Setter for rows.<p>
     * An array of objects, each representing a single row of the table.
     */
    public void setRows(List<OracleRollableRowText> rows) {
        this.rows = rows;
    }

    /**
     * Getter for type.<p>
     */
    public EmbeddedOracleColumnTextType getType() {
        return type;
    }

    /**
     * Setter for type.<p>
     */
    public void setType(EmbeddedOracleColumnTextType type) {
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
     * Getter for color.<p>
     * An optional thematic color for this column. For an example, see "Basic
     * Creature Form" (Starforged p. 337)
     */
    public CssColor getColor() {
        return color;
    }

    /**
     * Setter for color.<p>
     * An optional thematic color for this column. For an example, see "Basic
     * Creature Form" (Starforged p. 337)
     */
    public void setColor(CssColor color) {
        this.color = color;
    }

    /**
     * Getter for icon.<p>
     * An optional icon for this column.
     */
    public SvgImageUrl getIcon() {
        return icon;
    }

    /**
     * Setter for icon.<p>
     * An optional icon for this column.
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
     * Optional secondary text at the head of this column. For best results,
     * this should be no more than a few words in length.
     */
    public MarkdownString getSummary() {
        return summary;
    }

    /**
     * Setter for summary.<p>
     * Optional secondary text at the head of this column. For best results,
     * this should be no more than a few words in length.
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

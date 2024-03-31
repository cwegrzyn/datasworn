// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// Represents a single Feature entry from a delve site Theme card.
    /// </summary>
    public class DelveSiteThemeFeatureRow
    {
        /// <summary>
        /// High end of the dice range for this table row.
        /// </summary>
        [JsonPropertyName("max")]
        public short Max { get; set; }

        /// <summary>
        /// Low end of the dice range for this table row.
        /// </summary>
        [JsonPropertyName("min")]
        public short Min { get; set; }

        /// <summary>
        /// The primary text content of this row.
        /// </summary>
        [JsonPropertyName("text")]
        public MarkdownString Text { get; set; }

        [JsonPropertyName("_i18n")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public I18nHints? I18n { get; set; }

        /// <summary>
        /// Hints that the identified table should be rendered inside this table
        /// row.
        /// </summary>
        [JsonPropertyName("embed_table")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public OracleRollableId? EmbedTable { get; set; }

        [JsonPropertyName("icon")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public SvgImageUrl? Icon { get; set; }

        /// <summary>
        /// Further oracle rolls prompted by this table row.
        /// </summary>
        [JsonPropertyName("oracle_rolls")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IList<OracleRoll> OracleRolls { get; set; }

        [JsonPropertyName("suggestions")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public Suggestions? Suggestions { get; set; }

        [JsonPropertyName("template")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public OracleRollTemplate? Template { get; set; }
    }
}

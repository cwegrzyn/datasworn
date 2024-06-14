// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// A clock with 4 or more segments.
    /// </summary>
    public class ClockField
    {
        [JsonPropertyName("field_type")]
        public ClockFieldFieldType FieldType { get; set; }

        [JsonPropertyName("label")]
        public Label Label { get; set; }

        /// <summary>
        /// The size of the clock -- in other words, the maximum number of
        /// filled clock segments. Standard clocks have 4, 6, 8, or 10 segments.
        /// </summary>
        [JsonPropertyName("max")]
        public sbyte Max { get; set; }

        /// <summary>
        /// The minimum number of filled clock segments. This is always 0.
        /// </summary>
        [JsonPropertyName("min")]
        public sbyte Min { get; set; }

        [JsonPropertyName("rollable")]
        public bool Rollable { get; set; }

        /// <summary>
        /// The current value of this input.
        /// </summary>
        [JsonPropertyName("value")]
        public sbyte Value { get; set; }

        /// <summary>
        /// An icon associated with this input.
        /// </summary>
        [JsonPropertyName("icon")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public SvgImageUrl? Icon { get; set; }
    }
}

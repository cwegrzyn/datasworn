// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// A basic counter representing a non-rollable integer value. They usually
    /// start at 0, and may or may not have a maximum.
    /// </summary>
    public class CounterField
    {
        [JsonPropertyName("field_type")]
        public CounterFieldFieldType FieldType { get; set; }

        [JsonPropertyName("label")]
        public Label Label { get; set; }

        [JsonPropertyName("max")]
        public short Max { get; set; }

        /// <summary>
        /// The (inclusive) minimum value.
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

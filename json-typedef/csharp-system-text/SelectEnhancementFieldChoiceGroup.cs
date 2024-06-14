// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// Represents a grouping of options in a list of choices.
    /// </summary>
    public class SelectEnhancementFieldChoiceGroup
    {
        [JsonPropertyName("choice_type")]
        public SelectEnhancementFieldChoiceGroupChoiceType ChoiceType { get; set; }

        [JsonPropertyName("choices")]
        public IDictionary<string, SelectEnhancementFieldChoice> Choices { get; set; }

        /// <summary>
        /// A label for this option group.
        /// </summary>
        [JsonPropertyName("name")]
        public Label Name { get; set; }
    }
}

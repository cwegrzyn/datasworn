// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// A move must have this `roll_type` to receive this enhancement. This is
    /// in addition to any other restrictions made by other properties.
    /// </summary>
    [JsonConverter(typeof(MoveProgressRollEnhancementRollTypeJsonConverter))]
    public enum MoveProgressRollEnhancementRollType
    {
        ProgressRoll,
    }
    public class MoveProgressRollEnhancementRollTypeJsonConverter : JsonConverter<MoveProgressRollEnhancementRollType>
    {
        public override MoveProgressRollEnhancementRollType Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string value = JsonSerializer.Deserialize<string>(ref reader, options);
            switch (value)
            {
                case "progress_roll":
                    return MoveProgressRollEnhancementRollType.ProgressRoll;
                default:
                    throw new ArgumentException(String.Format("Bad MoveProgressRollEnhancementRollType value: {0}", value));
            }
        }

        public override void Write(Utf8JsonWriter writer, MoveProgressRollEnhancementRollType value, JsonSerializerOptions options)
        {
            switch (value)
            {
                case MoveProgressRollEnhancementRollType.ProgressRoll:
                    JsonSerializer.Serialize<string>(writer, "progress_roll", options);
                    return;
            }
        }
    }
}

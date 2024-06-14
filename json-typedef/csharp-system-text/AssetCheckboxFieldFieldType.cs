// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    [JsonConverter(typeof(AssetCheckboxFieldFieldTypeJsonConverter))]
    public enum AssetCheckboxFieldFieldType
    {
        Checkbox,
    }
    public class AssetCheckboxFieldFieldTypeJsonConverter : JsonConverter<AssetCheckboxFieldFieldType>
    {
        public override AssetCheckboxFieldFieldType Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string value = JsonSerializer.Deserialize<string>(ref reader, options);
            switch (value)
            {
                case "checkbox":
                    return AssetCheckboxFieldFieldType.Checkbox;
                default:
                    throw new ArgumentException(String.Format("Bad AssetCheckboxFieldFieldType value: {0}", value));
            }
        }

        public override void Write(Utf8JsonWriter writer, AssetCheckboxFieldFieldType value, JsonSerializerOptions options)
        {
            switch (value)
            {
                case AssetCheckboxFieldFieldType.Checkbox:
                    JsonSerializer.Serialize<string>(writer, "checkbox", options);
                    return;
            }
        }
    }
}

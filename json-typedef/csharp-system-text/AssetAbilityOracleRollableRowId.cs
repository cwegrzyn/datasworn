// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// A unique ID representing an AssetAbilityOracleRollableRow object.
    /// </summary>
    [JsonConverter(typeof(AssetAbilityOracleRollableRowIdJsonConverter))]
    public class AssetAbilityOracleRollableRowId
    {
        /// <summary>
        /// The underlying data being wrapped.
        /// </summary>
        public string Value { get; set; }
    }

    public class AssetAbilityOracleRollableRowIdJsonConverter : JsonConverter<AssetAbilityOracleRollableRowId>
    {
        public override AssetAbilityOracleRollableRowId Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            return new AssetAbilityOracleRollableRowId { Value = JsonSerializer.Deserialize<string>(ref reader, options) };
        }

        public override void Write(Utf8JsonWriter writer, AssetAbilityOracleRollableRowId value, JsonSerializerOptions options)
        {
            JsonSerializer.Serialize<string>(writer, value.Value, options);
        }
    }
}

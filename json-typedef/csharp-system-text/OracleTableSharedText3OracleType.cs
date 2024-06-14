// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// A table with multiple unique roll columns, and 3 shared text columns.
    /// </summary>
    [JsonConverter(typeof(OracleTableSharedText3OracleTypeJsonConverter))]
    public enum OracleTableSharedText3OracleType
    {
        TableSharedText3,
    }
    public class OracleTableSharedText3OracleTypeJsonConverter : JsonConverter<OracleTableSharedText3OracleType>
    {
        public override OracleTableSharedText3OracleType Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string value = JsonSerializer.Deserialize<string>(ref reader, options);
            switch (value)
            {
                case "table_shared_text3":
                    return OracleTableSharedText3OracleType.TableSharedText3;
                default:
                    throw new ArgumentException(String.Format("Bad OracleTableSharedText3OracleType value: {0}", value));
            }
        }

        public override void Write(Utf8JsonWriter writer, OracleTableSharedText3OracleType value, JsonSerializerOptions options)
        {
            switch (value)
            {
                case OracleTableSharedText3OracleType.TableSharedText3:
                    JsonSerializer.Serialize<string>(writer, "table_shared_text3", options);
                    return;
            }
        }
    }
}

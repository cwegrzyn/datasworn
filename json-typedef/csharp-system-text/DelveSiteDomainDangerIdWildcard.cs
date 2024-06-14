// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// A wildcarded DelveSiteDomainDangerId that can be used to match multiple
    /// DelveSiteDomainDanger objects.
    /// </summary>
    [JsonConverter(typeof(DelveSiteDomainDangerIdWildcardJsonConverter))]
    public class DelveSiteDomainDangerIdWildcard
    {
        /// <summary>
        /// The underlying data being wrapped.
        /// </summary>
        public string Value { get; set; }
    }

    public class DelveSiteDomainDangerIdWildcardJsonConverter : JsonConverter<DelveSiteDomainDangerIdWildcard>
    {
        public override DelveSiteDomainDangerIdWildcard Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            return new DelveSiteDomainDangerIdWildcard { Value = JsonSerializer.Deserialize<string>(ref reader, options) };
        }

        public override void Write(Utf8JsonWriter writer, DelveSiteDomainDangerIdWildcard value, JsonSerializerOptions options)
        {
            JsonSerializer.Serialize<string>(writer, value.Value, options);
        }
    }
}

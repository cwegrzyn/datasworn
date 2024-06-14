// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    [JsonConverter(typeof(NonCollectableTypeJsonConverter))]
    public enum NonCollectableType
    {
        DelveSite,

        DelveSiteDomain,

        DelveSiteTheme,

        Rarity,

        Truth,
    }
    public class NonCollectableTypeJsonConverter : JsonConverter<NonCollectableType>
    {
        public override NonCollectableType Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string value = JsonSerializer.Deserialize<string>(ref reader, options);
            switch (value)
            {
                case "delve_site":
                    return NonCollectableType.DelveSite;
                case "delve_site_domain":
                    return NonCollectableType.DelveSiteDomain;
                case "delve_site_theme":
                    return NonCollectableType.DelveSiteTheme;
                case "rarity":
                    return NonCollectableType.Rarity;
                case "truth":
                    return NonCollectableType.Truth;
                default:
                    throw new ArgumentException(String.Format("Bad NonCollectableType value: {0}", value));
            }
        }

        public override void Write(Utf8JsonWriter writer, NonCollectableType value, JsonSerializerOptions options)
        {
            switch (value)
            {
                case NonCollectableType.DelveSite:
                    JsonSerializer.Serialize<string>(writer, "delve_site", options);
                    return;
                case NonCollectableType.DelveSiteDomain:
                    JsonSerializer.Serialize<string>(writer, "delve_site_domain", options);
                    return;
                case NonCollectableType.DelveSiteTheme:
                    JsonSerializer.Serialize<string>(writer, "delve_site_theme", options);
                    return;
                case NonCollectableType.Rarity:
                    JsonSerializer.Serialize<string>(writer, "rarity", options);
                    return;
                case NonCollectableType.Truth:
                    JsonSerializer.Serialize<string>(writer, "truth", options);
                    return;
            }
        }
    }
}

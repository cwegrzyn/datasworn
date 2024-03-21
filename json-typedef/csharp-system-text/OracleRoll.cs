// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Text.Json.Serialization;

namespace Datasworn
{
    public class OracleRoll
    {
        /// <summary>
        /// Both Ironsworn and Starforged explicitly recommend *against* rolling
        /// all details at once. That said, some oracle texts only provide
        /// useful information once a secondary roll occurs, such as "Action +
        /// Theme" or "Roll Twice".
        /// </summary>
        [JsonPropertyName("auto")]
        public bool Auto { get; set; }

        [JsonPropertyName("dice")]
        public DiceExpression Dice { get; set; }

        /// <summary>
        /// Special rules on how to handle duplicate texts, when rolling
        /// multiple times.
        /// </summary>
        [JsonPropertyName("duplicates")]
        public OracleDuplicateBehavior Duplicates { get; set; }

        /// <summary>
        /// The number of times to roll.
        /// </summary>
        [JsonPropertyName("number_of_rolls")]
        public short NumberOfRolls { get; set; }

        [JsonPropertyName("oracle")]
        public OracleRollableId Oracle { get; set; }
    }
}

console.log("hello buddy");
import Discord from "discord.js";
import { token } from "../config.json";

const Client = new Discord.Client({
    intents: ["GUILD_INVITES"],
    partials: ["CHANNEL", "GUILD_MEMBER", "USER"]
});

Client.on("ready", () => {
    console.log(`Invite me: `, Client.generateInvite({ scopes: ["applications.commands", "bot"], permissions: "ADMINISTRATOR" }));
});

Client.login(token);
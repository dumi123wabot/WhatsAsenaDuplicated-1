/* # Exclusively from D-GANG
*/

const dgang = require( ../events );
const { MessageType, MessageOptions, Mimetype } = require( @adiwajshing/baileys );
const fs = require( fs );
const axios = require( axios );
const Config = require( ../config );
const need = "some command are not working it's not our false.it is logo site errors.\n🗡🗡"

if (Config.WORKTYPE ==  private ) {

    RAVANA.addCommand({ pattern:  dnpack ?(.dnpack*) , fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] ===   ) return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/logobp?apikey=9e3bacca64aa4248cd0ce7fc&text=${encodeURIComponent(match[1])}`, { responseType:  arraybuffer  })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.MADE BY D-GANG})

    }));
}

else if (Config.WORKTYPE ==  public ) {

    RAVANA.addCommand({ pattern:  dnpack ?(.dnpack*) , fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] ===   ) return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/logobp?apikey=9e3bacca64aa4248cd0ce7fc&text=${encodeURIComponent(match[1])}`, { responseType:  arraybuffer  })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.MADE BY D-GANG})

    }));
    
}

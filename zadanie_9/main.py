import os
from discord import Intents, Client, Message
from responses import get_response

intents = Intents.default()
intents.message_content = True
client = Client(intents=intents)

async def send_message(message: Message, user_message: str) -> None:
    if not user_message:
        print("Message was empty")
        return
    try:
        response = get_response(user_message)
        await message.channel.send(response)
    except Exception as e:
        print(f"Error: {e}")

@client.event
async def on_ready()->None:
    print(f'Logged in as {client.user}')

@client.event
async def on_message(message: Message)->None:
    if message.author == client.user:
        return
    username = str(message.author)
    user_message = message.content
    channel = str(message.channel)

    print(f'{username} in {channel} sent: {user_message}')
    if user_message.startswith('CodeHelper!'):
        await send_message(message, user_message)



def main()->None:
    client.run(token="")


if __name__ == '__main__':
    main()













from random  import choice
import subprocess

def get_response(user_input)->str:
    loowered = user_input.lower()
    if loowered == '':
        return 'Message was empty'
    elif 'hello' in loowered:
        return 'Hello there!'
    elif 'explain' in loowered:
        return subprocess.run(['gh', 'copilot', 'explain', user_input[19:]], capture_output=True).stdout.decode('utf-8')
    else:
        return choice(['I do not understand', 'Try again', 'I am not sure what you mean', 'I am a bot, I do not understand human language'])
    # raise NotImplementedError('Code is missing...')

 
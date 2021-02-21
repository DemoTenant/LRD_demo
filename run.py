import os

root_dir = os.getcwd()
scripts_directory = os.path.join(root_dir, "scripts")

for dir in os.listdir(scripts_directory):
    scriptDir = os.path.join("scripts", dir)
    if os.path.isdir(scriptDir) and not dir.startswith('.'):
                os.system('DevWeb.exe -mode=load ' + scriptDir)

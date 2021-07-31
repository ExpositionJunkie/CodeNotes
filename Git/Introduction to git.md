# Regular command line commands you should know
1. ls: display the files in your current directory. Or dir: same thing for windows.
2. cd: change directory. For example. "cd subdirectory" will switch you to a file called subdirectory immediately under your current position in the file system.
3. cd ..: This will move you up one directory.
4. mkdir: creates a sub directory. This is the same for windows and linux. For example. "mkdir myCoolSubFolder".
5. rm: This will delete a file in linux. For example "rm test.txt"
6. del: this will delete a file in windows. For example "del test.txt"
7. touch: this will create a file on linux. for example "touch test.txt"
8. echo: this will create a file on windows. NOTE: you have to type the first line of text with echo, then use the right arrow to specify what the file name should be. For example. "echo testText > test.txt". Windows kind of sucks for this.
9. rm -r direcotryname: removes a directory and all its sub files and folders. This works on linux and windows. NOTE: the -r here is important, if you don't include it, you will get an error.

# A brief overview of git.
Git is a powerful and complex versioning system.
It allows multiple developers to work in tandem on the same code without worrying about overwriting each others work. It also keeps a history of every single change, and who made the change, and allows developers to easily create copies of projects to test ideas without having to edit the main project.

# The git remote
Git is intended to be used across multiple computers.
Usually you will have a single computer "remote" to host the main version of the files you are working on. 
Developers who wish to edit those files will copy them to their personal "local" machines for changes. 
When they are done editing, they can "merge" or sync their changes back up with the remote computers copy of the files.

# Main commands you need to know
Git is complex, but 90% of the most common actions can be summed up in 10 or 12 relatively simple commands.
In order to get started with git, you don't need to be an expert, you just need to memorize these basic commands, and you will be surprised how far you can go!
Bellow are a list of the main commands.

# git status
Checks to see what files you have changed. 
Shows the files that have been added to the staging area in green, files that have no in red.

# git add .
Here the . is a shorthand for "all files"
This command adds all changed files to the stage.

# git commit -m 'this is my commit message'
Use this command to commit your changes added to stage. 
NOTE: If your files are not added to stage, you wont commit anything.

# git reset --hard
This command will undo all changes you have made since your last commit. Use with caution!

# git pull
Checks to see if your current branch is different from the remote, if so, it merges them together.
NOTE: always commit before pulling.

# git push=
This command merges your remote repository with your local repository.

# git clone url
This will copy a remote repository to your current directory.
NOTE: after you do this, you will probably want to also set the remote and the upstream branch. 
If you are setting up a new git project on github, github has instructions on how to do this.

# git init
Use this command in a local project to set it up to be used as a git repository. Used only once at the very beginning of each project.

# git branch
This will show you what branches are available.

# git branch -a
This will show you what branches are available both locally, and on your remote.

# git branch branchName
This will create a new branch

# git checkout branchName
Use this to switch between branches.


# Main Rules of good practice.
1. Commit frequently, push at minimum at the end of each day.
2. Write good commit messages. Trust me, its a habit that will save you later. 
3. Some actions cannot be done without committing first... However others cant. In eithe case, best to always commit before you do anything new with git especially, switching branches, or pulling or pushing to or from remote.

# Git GUI programs
There are many git graphical user interfaces available. Github has one, bitbucket has one, git even comes with one built in...
These programs are very useful intuitive tools for beginners to be able to use git. They can really help with the learning process since they often have visualizations of the actions you would normally type into the command prompt.
The one I have used the most is called "Git Kracken". https://www.gitkraken.com/
Its free for single users and public projects. I highly recommend it as a place to start.

You can use these programs to execute all of the commands shown above. 
However its important that you don't lean on them too much.
The command line tools are universal, where the gui programs are not. Also the command line is more powerful the more advanced you become in git.
For this reason, if you want a visual aid, by all means use a GUI for git when you are a beginner. But employers will expect you to be able to use the command line.




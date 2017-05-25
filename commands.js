command: git checkout -b <branch_name> (create new branch)

command: git checkout <branch_name>    (move to another branch) 

command: git branch -d <branch_name>   (delete branch - PS: checkout to other branch before deleting it)
       
command: git branch    (to show local branches and which branch you are)
		 OR git branch -r (show all remore branches) 
		 OR git branch -a (show all local and remote branches)
		 
		 
MERGE: cria um commit novo
REBASE: joga as mudancas para o inicio da fila (linear, porem perder a ordem cronologica), nao criar commmits extras

command: git pull --rebase
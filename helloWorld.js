Author: Felipe de Padua

----------------- RESUMO DE TRAINING:

> Git: Created by Linus Torvalds (mesmo que criou o Linux)

> Git hooks: onde estao os triggers (p.ex. o git Lint que vai verificar qualidade do codigo quando feito o commit; Jenkins, etc.)
> .gitconfig (arquivo config global onde estao as configuracoes de name, email, editor, etc)

command: git rm --cached <file> to unstage

command: git checkout -- <file> OR git checkout . (remove all modifications. It returns to the way it was after the last COMMIT)
		  PS: > git checkout <file> (tambem funciona. Desfaz as modificacoes)

command: git config user.name ; git config user.email (to show email or name)

command: git shortlog ; git log --author="<Felipe>" 
command: git log --graph (shows graph so that you can check if there was a merge, rebase, etc.)

command: git show <hash do commit> (p.ex: b8f24c6fcc429e30245ac3fd23f8997c1f5d4045)
			- mostra as modificacoes que foram feitas naqule commit (similar ao DIFF)
			
command: git diff (show the modifcations)
			- You can also do: git diff <file-changed> <file to compare from another branch>
			
command: git diff --name-only (show only what files have been modified)

command: git reset HEAD <file>  (to unstage)

command: git commit -am "<message>" (ja faz "add ." e commit -m ) [VI: RECOMENDA-SE FAZER PASSO A PASSO]

command: git reset --soft <commit hash>  (undo commit AND it will keep the modifications from this commit AND stage them)
command: git reset --mixed <commit hash> (undo commit AND it will keep the modifications from this commit AND leave unstaged)
command: git reset --hard <commit hash>  (undo commit AND it will ignore all changes (it wont keep any modification))
	- OBS: o hash que voce passa eh o commmit no qual voce quer retornar

	
> Commandos para linkar a um repositorio remoto (Ver a aba 'Code' em https://github.com/shunnaidder/gitTraining):
	command 1): git remote add origin git@github.com:shunnaidder/gitTraining.git
    command 2): git push -u origin master ('origin' é para onde vai e 'master' é o branch de onde vem [a fazer push])
				-PS: precisa ter a chave ssh:
						- https://gist.github.com/developius/c81f021eb5c5916013dc
							1) ssh-keygen -t rsa -C "your_email@example.com"
							2) Copy the contents of the file ~/.ssh/id_rsa.pub to your SSH keys in your GitHub account settings
							3) Go to GitHub on 'Settings' > 'SSH and GPG Keys' > 'New SSH key' and add the key 
				
				
command: git remote (lista os repositorios remotos ligados)

command: git push origin master  [to push MASTER to ORIGIN repository on Github] (the -u is useful only th first time)


> Fork: you can use FORK to get a copy of a repository that you do not have permission to push changes.
	    You should fork the repository, clone the forked repo to your machine, make changes and push them. After that, you can
		do a 'pull request' so that the owner of that real repository will analyze your changes. If they like, they can accept/merge 
		your changes.
		
		
command: git checkout -b <branch_name> (create new branch)

command: git checkout <branch_name>    (move to another branch) 

command: git branch -d <branch_name>   (delete branch - PS: checkout to other branch before deleting it)
       
command: git branch    (to show local branches and which branch you are)
		 OR git branch -r (show all remore branches) 
		 OR git branch -a (show all local and remote branches)
		 
		 
MERGE: cria um commit novo (porem mantem a ordem cronologica dos commits)
REBASE: joga as mudancas para o inicio da fila (linear, porem perde a ordem cronologica dos commits), nao criar commmits extras

command: git pull --rebase [aconselhado quando feito o pull]

command: on master do: 1) git merge <branch_name> (You will merge the branch on the master)
		               2) Now do 'git push origin master' to push changes to the remote repository
		



	
		
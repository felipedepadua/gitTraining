Author: Felipe de Padua

----------------- RESUMO DE TRAINING:

> Git: Created by Linus Torvalds (mesmo que criou o Linux)

> Git hooks: onde estao os triggers (p.ex. o git Lint que vai verificar qualidade do codigo quando feito o commit; Jenkins, etc.)
> .gitconfig (arquivo config global onde estao as configuracoes de name, email, editor, etc)

command: git rm --cached <file> to unstage

command: git checkout -- <file> OR git checkout . (remove all modifications. It returns to the way it was after the last COMMIT)
		  PS: > git checkout <file> (tambem funciona. Desfaz as modificacoes)

command: git config user.name ; git config user.email (to show email or name)

command: git shortlog ; git log --author="Felipe" 
command: git log --graph (shows graph so that you can check if there was a merge, rebase, etc.)

command: git show <hash do commit> (p.ex: b8f24c6fcc429e30245ac3fd23f8997c1f5d4045)
			- mostra as modificacoes que foram feitas naqule commit (similar ao DIFF)
			
command: git diff (show the modifcations)
			- You can also do: git diff [filename]  (file to compare)
			git diff HEAD // shows the list of changes after your last commit.
			git diff --cached // shows the diff between your last commit and changes to be committed next.		 
		 Check: https://veerasundar.com/blog/2011/06/git-tutorial-comparing-files-with-diff/
			
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

command: git branch -D <branch_name>   (delete branch - PS: checkout to other branch before deleting it)
		 Delete remote branches: https://www.git-tower.com/learn/git/faq/delete-remote-branch
       
command: git branch    (to show local branches and which branch you are)
		 OR git branch -r (show all remore branches) 
		 OR git branch -a (show all local and remote branches)
		 
		 
MERGE: cria um commit novo (porem mantem a ordem cronologica dos commits)
REBASE: joga as mudancas para o inicio/topo da fila de commits (estrutura linear, porem perde a ordem cronologica dos commits), 
        nao cria commmits extras

command: git pull --rebase [aconselhado quando feito o pull]

command: on master do: 1) git merge <branch_name> (You will merge the branch on the master)
		               2) Now do 'git push origin master' to push changes to the remote repository
		
command: on master do: git rebase <branch_name> (i will rebase the branch on the master)

command: git rm <filename> (to remove a file and automatically stage it)
		 OR delete manually and then: git add [filename]

	
command: git stash (to save unstaged changes)
         - É quase como um "git checkout .", ou seja, ele remove as modificaçoes, porem ele guarda essas modificacoes para uso futuro
		 - Exemplo Pratico: se voce sair da branch, voce vai perder as modificacoes. Entao, voce quer guardar as modificacoes para
		   quando voltar, voce poder recupera-las
		 - * Exemplo Pratico 2: quando voce precisar dar um PULL, Git nao deixa fazer se tiver modificacoes. No entanto se voce der
		     um "git checkout .", voce vai perder todas suas modificacoes. 
			 Entao, voce pode dar "git stash", da o "git pull" e, entao, da "git stash apply"
	> Para recuperar, command: git stash apply 	
	> command: git stash list (ver a lista de stash, pois posso usar stash varias vezes)
	> command: git stash clear (limpo o stash list)

		 
// Dei git stash para esconder essa linha. Agora, depois do 'git stash apply ela vai aparecer antes das modoficacoes vindas do PULL  
// Modifiquei pelo Github.com e dei commmit para depois dar pull na maquina local. Porem, tambem tinha modificacao local. 
// Entao, eu fiz o 'git stash' antes de dar pull. Depois do pull, fiz 'git stash apply'. Portanto, agora tenho as
// modificacoes do PULL e STASH aqui
		 
command: git revert <commit hash>
		  - faz um COMMIT revertendo as modificações daquele commit	
			- EX: se voce fez um COMIIT a123... que adicionou uma linha X, o 'git revert <a123...>' faz um novo
			      COMMIT que apaga essa linha X (Ele nao some com o COMMIT anterior que adicionou a linha X)
				  Depois voce pode da um CHECKOUT para esse commit novamente p/ continuar trabalhando nele
				    -> Voce pode verificar isso dando um 'git show <commit_hash_gerado_revert>'
		PS: não é tao utilizado. 
			-> Com comandos como o 'RESET --soft' e 'git stash'  voce consegue fazer algo similir.
			
command: git push origin :<branch_name> (to delete remote branch)
			- git branch -d <branch_name> so apaga localmente
			

-> * Rebasing & Merging: https://www.youtube.com/watch?v=a_msiOrYLgM


command: git commit --amend -m "message that will substitute the current commit"
		    - you can also add more code before doing the command above and it will also be included in the commit
			PS: you might not notice, but the commit hash will change (thats how gerrit creates the concept o patchset)

command: git log --stat (to see summary of files changed)
			
----- VERY IMPORTANT:
command: git pull --rebase
   EX.1: Voce faz uma modificacao e faz um commit. Logo após, voce roda o 'git pull --rebase' que traz modificacoes que 
         foram 'pushed' para o repositorio remoto mas ainda nao esta no local. 
		 Entao, diferente de somente dar 'git pull', ele vai colocar o commit local no topo.
		 PS: no entanto, vai dar CONFLICT, voce deve resolver o conflito (ex: git mergetool -t kdiff3) e entao dar
		 o comando 'git rebase --continue'
			  -	When you have resolved this problem, run "git rebase --continue".
                If you prefer to skip this patch, run "git rebase --skip" instead.
                To check out the original branch and stop rebasing, run "git rebase --abort".
				
		FINALLY: Após isso, voce vai ter pegado todas as mudancas e se der 'git status', vai ver que seu commit vai 
                 estar no topo (1 commit ahead of origin/master) pronto para ser 'pushed'.		
				 
	SOURCE: https://help.github.com/articles/resolving-merge-conflicts-after-a-git-rebase/
-----

IMPORTANT!!!! Never forget the command: gitk

EXTRA: gerrithub.io (Repo that combines Gerrit and Github)

--- (EXTRA) Github vs GitLab [git repositories]: 
	- https://usersnap.com/blog/gitlab-github/
	- * https://www.upwork.com/hiring/development/gitlab-vs-github-how-are-they-different/
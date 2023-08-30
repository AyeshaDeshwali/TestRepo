# Github Commands

## What is a git ?

Git ek software hai jo code management mein madad karta hai. Isse hum log apne code ko track kar sakte hain aur team ke saath collaborate karke kaam kar sakte hain. Git ek distributed version control system hai, jiski madad se hum apne code ki copies create kar sakte hain, changes track kar sakte hain aur code ko manage kar sakte hain. Jab bhi hum koi changes karte hain code mein, toh Git usko ek snapshot ki tarah capture kar leta hai. Agar kuch gadbad ho jaaye ya kuch purane version pe wapas jaana ho, toh Git ki madad se aasani se woh purane versions ko restore kar sakte hain. Isse code ka backup bhi ban jaata hai taki koi bhi problem ho, toh hum log original code ko recover kar sakein. Overall, Git ek bahut hi useful tool hai developers ke liye, jo code management ko asaan aur systematic bana deta hai.

## How to install Github

- GitHub for Windows
  https://windows.github.com

- GitHub for Mac
  https://mac.github.com

- Git for All Platforms
  http://git-scm.com

- Git distributions for Linux and POSIX systems are available on
  the official Git SCM web site.

## Commands

### git status

Git status ek command hai jo hume batata hai ki hamare current working directory mein kya changes huye hain aur Git un changes ko track kar raha hai ya nahi.

Jab hum git status command ko run karte hain, to Git hamein kuch important information deta hai:

1. Modified files: Ye bataata hai ki kaun se files mein changes huye hain, lekin abhi tak unko commit nahi kiya gaya hai.

2. Staged files: Ye bataata hai ki kaun se files ke changes ko aapne stage kiya hai, taki unhein next commit mein include kiya ja sake.

3. Untracked files: Ye bataata hai ki kaun se files hai jo abhi tak Git ke track mein nahi hai. In files ko aapko stage karna hoga, fir unhein commit karne ke liye.

### git init

git init ek Git repository initialize karne ke liye use hota hai. Jab hum git init command ko kisi project directory mein run karte hain, toh Git us directory mein ek naya Git repository create karta hai.

Is command ko run karne se Git us directory mein kuch hidden folders aur files create karta hai, jinmein Git ki saari information aur history store hoti hai. Ye repository us project ke code ko track karne ke liye hota hai.

Jab aap git init command ko run karte hain, toh aapka project Git ke control mein aa jata hai. Ab aap code mein changes karke unhein commit kar sakte hain, aur Git aapke changes ko track karega aur code ki history maintain karega.

Dhyan rahe, git init sirf ek baar karna hota hai, jab aap ek naya project start kar rahe hote hain. Jab aap ek baar repository create kar chuke hote hain, toh us project directory ke andar .git naam ka ek folder bana ho jata hai, jiske andar Git ki saari information hoti hai.

### git clone

git clone ek Git command hai jo kisi existing Git repository ko copy karne ke liye use hota hai. Is command ki madad se hum ek remote repository se uske complete copy (including code and version history) ko apne local machine par le sakte hain.

Jab hum git clone command ko run karte hain, toh Git us remote repository se code ko download karke ek local copy create karta hai. Is local copy ko hum apne local machine par modify kar sakte hain aur fir usko commit karke changes ko remote repository mein push kar sakte hain.

Yahan <repository_url> remote repository ka URL hota hai, jahaan se aap code ko clone karna chahte hain. Is URL ko aap typically GitHub, GitLab, Bitbucket, ya kisi doosre Git hosting service se obtain kar sakte hain.

for example:

```
git clone https://github.com/username/repositoryname.git
```

Ye command chlane ke bad ek repository ke naam se folder bn jayega fir hum us folder me jake dekh skte hain jo b code is repositoy me hai vo hmare local pr system pr aa jayega.

### git checkout -b branchname

git checkout -b <branchname> ek Git command hai jo hume ek naye branch (shakh) ko create karke usme switch karne ke liye use hota hai.

Jab hum git checkout -b <branchname> command ko run karte hain, toh Git ek naya branch create karta hai jiska naam <branchname> hota hai, aur us branch mein switch kar deta hai. Is tarah se hum naye branch pe aasani se kaam kar sakte hain.

Yahan <branchname> ek naya branch ka naam hota hai, jise aap khud specify karte hain. Ye branch naam unique hona chahiye aur iss naam se pehle is branch ka existence nahi hona chahiye.

for example agar hum user login form pr kaam kr rhe hain to branch ka naam hoga featue/User-Login-Form

```
git checkout -b feature/User-Login-Form
```

### How to switch to other branch ?

Iske lie hum 2 commands use kr skte hain:

1. git switch branchname: isse jo branchname dia hai us pr switch ho jayenge (new command introduced in Git 2.23.0 (August 2019) to provide a more intuitive and safer way to switch branches.)
2. git checkout branchname: isse bhi die gye branchname pr switch ho jayenge

### git add filename


git add filename command ka use karke aap kisi specific file ke changes ko "staging area" mein add kar sakte hain. Jab aap kisi file mein changes karte hain, toh wo changes "unstaged" hote hain, matlab unhein abhi tak commit ke liye tayyar nahi kiya gaya hai. Lekin git add ki madad se aap un changes ko temporary storage, jo hum kehte hain "staging area," mein daal sakte hain, jahaan se aap unhein agle commit ke liye taiyaar kar sakte hain.

for example

```
git add <filename>
```

Yahan <filename> file ka naam hota hai, jise aap staging area mein add karna chahte hain. Aap wildcards ya patterns ka bhi istemaal karke multiple files ko add kar sakte hain jo ek specific criteria se match karte hain.

Git ke staging area mein changes add karne ke baad, aap us staging area ko commit karke apne changes ko permanent banate hain.

### git diff filename

git diff filename ek Git command hai jo aapke local working directory ke ek file ke changes ko dekhne ke liye use hota hai. Command ka syntax kuch iss tarah hota hai:

```
git diff <filename>
```

Yahan <filename> file ka naam hota hai, jiska aap changes dekhna chahte hain. Jab aap ye command run karte hain, Git aapko batata hai ki us file mein ab tak ke changes kya kya hain, jo abhi tak commit nahi kiye gaye hain.

Ye command aapko file ke unmodified (last commit se ab tak ke changes), modified (staged nahi kiye gaye changes), aur staged (staged kiye gaye changes) sections mein differences dikhaega.

Example ke liye, agar aap file1.txt ka diff dekhna chahte hain, toh aap ye command use karenge:

```
git diff file1.txt
```

Isse aapko file1.txt ke unmodified, modified, aur staged changes ke details milenge. Ye bahut helpful hota hai jab aap apne code mein kiye gaye changes ka review karna chahte hain aur samajhna chahte hain ki aapne kya kya modifications kiye hain, jo abhi tak commit nahi kiye gaye hain.

### git commit -m “massage”

Is command ka use files ko add krne ke bad commit krne ke lie kia jata hai. Commit ka matlab yha yeh hai ki humne jo changes kie hain hum unhe approve kr rhe hain aur git me vo changes add krna chahte hain. Apne changes save krne ke lie commit command ka use kr skte hain. -m ka matlab message hota hai. -m ke bad double quotes me message dete hain

### git push origin branchname

Git push ka matlab humne jo b changes apne local machine pr kie hain unhe git pr upload krna. Git push jab tak ni krenge tab tak vo changes hmari machine pr hi rhenge lekin hum changes ko add vah commit krne ke bad jaise hi git push krenge vo changes repository me push ho jayenge au hm us repository ko Browser me open krke apne changes dekh skte hain. for example yadi humne ek index.html file bnayi hai to use is trah se push krenge

```
git add index.html
git commit -m "Added new html file"
git push origin branchname
```

### git config

git config se hum user ka name and email set krte hain. Aisa islie krte hai kuki jab hm repository me jake commits/changes dekhenge to vha hmara naam show hoga. Isse yeh pta lg jata hai ki ye changes kisne kie hain. Git config ke ye 2 commands use hote hain

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

### git reset

git reset command ka use hum tab krte hain jab hume apni repository ko kisi previous commit pr le jana ho. For example manlo aapne local machine pr 2 commit kie hue hain lekin aap apni repository ko firse vaise hi bnana chahte hain jaisi vo 2 commits phle thi to git reset command ka use kr skte hain. Dusra example yeh hai ki jaise humne files add krdi but ab hum unhe commit ni krna chahte to b git reset ka use kr skte hai. Git reset command kafi trah use hota hai jo ki niche explain kia gya hai.

Last commit ko htado but changes remove mat kro

```
git reset --soft HEAD~1
```

Yeh command last commit ko hta dega plus changes bremove kr dega

```
git reset --hard HEAD~1
```

Har commit ki ek sha id hoti hai yadi hm kisi specific commit ko
remove krna chahte hai aur us commit ke changes ko remove ni krna chahte to yeh command use kr skte hain:

```
git reset --soft
```

Yeh upar vale commit ki trah hi kaam krega but yeh command changes ko remove b kr dega

```
git reset --hard
```

### git clean -n

yeh untracked/new files ke bare me btata hai jo
humne bnayi hai pr git me add ni ki.

### git clean -d

yeh command yadi humne koi new file/folder bnaya hai to use remove kr dega. -d ka matlab directory hota hai

### git clean -f

yeh command new files ko remove kr dega. -f ka matlab file hota hai git restore --stage filename : Yadi humne koi file git me add krdi hai aur hume vo file htani hai to hum git restore command us krke us file ko hta skte hain.

### git rm file name

is ka use current working directory me file ko htana ka leya use keya ja skta hai. git log : Is command ka use current branch me commit history ko dakh na ka leya hota hai.

### git log -p -1

Yadi hume sirf last kuch commits ki history dekhni hai to hum ye command use kr skte hain iske lie hume last vah number - ke sath dena hota hai for example -2 likhenge to commits ki history me se last ke 2 commits btayega

### git merge branchname

yadi hum hmari branch me kisi dusri branch ke code apni branch me lana chahte hain to merge command use kr skte hain. Iske lie hume humari current branch pr yeh code chlana hoga aur us branch ka sara code hmari branch me merge ho jayega. merge ka matlab yah hai ki sara code mil jayega aur yadi kisi line/file me koi issue aaya to use hm git ki language me conflict khte hain. Conflict resolve krne ke yeh process hai.

1. Sbse phle jin files me conflicts aaye hain unke bare me pta lgana
   hai. To iske lie Git khud un sari files ka naam merge krne ke bad
   btayega ki kin kin files conflicts aye hain.
2. Fir hume vo sari files one to one pick krni hai aur unke conflicts
   resolve krne hain
3. Conflicts resolve krte time3 options hote hain.
   - Ya to aap apne changes rkhlo
   - Ya aap jo branchname di hai uske changes rkhoge
   - Ya dono hi changes rkhlo

### git fetch

git fetch ka use particular branch se changes local pr fetch krne ke lie use hota hai.

### git pull

git pull ka use particular branch se changes local pr pull krne krne ke lie use hota hai. Pr ye changes pull krke merge b krta hai.

### git stash

Yadi hm branch switch kr rhe hain ya hm apne changes thode time ke lie side me rkhna chahte hain to hm git stash command use kr skte hain. git stash likhte hi apke sare changes hat jayenge aur locally ek jgah save ho jayenge. aapko vo changes dhikenge ni pr aap ke changes save ho gye hain to aap jo b kaam krna hai ab kr skte hain aapke changes saved hain.

### git stash apply

Humne jo b changes stash kie the unhe dubara vapas lane ke lie yah command use kia jata hai

### git revert

Yadi hume koi commit ke changes htane hain to hm git revert command ka use kr skte hain iske lie hume sha id ki jrurat
pdti hai. for example:

```
git revert shaid
```

Jis commit ki sha id humne di hai us commit ke changes remove ho jayenge

### git log
Repository ke commit history ko dekhne ke liye
Example: `git log`

### git branch
Branches ko create, delete aur list karne ke liye
Example: `git branch`, `git branch new-branch`, `git branch -d old-branch`

### git checkout 
Branches ke beech switch karne ke liye
Example: `git checkout branch-name`, `git checkout -b new-branch`

### git merge 
Different branches ke code ko merge karne ke liye
Example: `git merge branch-name`

### git push 
Local repository ke changes ko remote repository me upload karne ke liye
Example: `git push origin main`

### git pull 
Remote repository se recent changes ko download karne ke liye
Example: `git pull origin main`

### git clone 
Remote repository ko local machine me clone karne ke liye
Example: `git clone https://github.com/user/repo.git`

### git fetch 
Remote repository ke latest changes ko download karke local repository me update karne ke liye
Example: `git fetch origin`

### git remote add 
Remote repository ko local repository ke sath connect karne ke liye
Example: `git remote add origin https://github.com/user/repo.git`

### git diff 
Changes ko compare karne ke liye
Example: `git diff file.txt`

### git reset 
Changes ko unstage karne ke liye
Example: `git reset file.txt`

### git rm 
Files aur directories ko remove karne ke liye
Example: `git rm file.txt`

### git tag 
Repository ke specific version ko tag karna
Example: `git tag v1.0`

### git stash 
Temporary changes ko save karne ke liye
Example: `git stash`, `git stash apply`

### git remote 
Remote repository ke sath interaction ke liye
Example: `git remote -v`

### git rebase 
Branch ke history ko modify karne ke liye
Example: `git rebase main`

### git blame 
File ke each line ko konse commit ne change kiya hai, uska pata lagane ke liye
Example: `git blame file.txt`

### git grep 
Repository me search karne ke liye
Example: `git grep "search term"`

### git cherry-pick 
Specific commit ko current branch me merge karne ke liye
Example: `git cherry-pick commit-hash`

### git submodule 
Submodule ko add, update aur remove karne ke liye
Example: `git submodule add https://github.com/user/repo.git`

### git show 
Specific commit ka details (changes and metadata) dikhane ke liye
Example: `git show commit-hash`

### git config 
Git ke configuration settings ko set aur get karne ke liye
Example: `git config --global user.name "Your Name"`

### git revert 
Specific commit ko undo karne ke liye
Example: `git revert commit-hash`

### git bisect 
Code me bug ka exact point find karne ke liye
Example: `git bisect start`, `git bisect bad`, `git bisect good`

### git remote rm 
Remote repository ko local se remove karne ke liye
Example: `git remote rm origin`

### git log --oneline 
Short commit history dikhane ke liye
Example: `git log --oneline`

### git log -5 
Last 5 commit ka history dikhane ke liye
Example: `git log -5`

### git rebase -i 
Interactive rebase ke liye
Example: `git rebase -i HEAD~3`

### git checkout -b 
New branch create aur switch karne ke liye ek hi command ka use karna
Example: `git checkout -b new-branch`

### git push --force 
Remote repository me forceful changes ko upload karne ke liye
Example: `git push --force origin main`

### git cherry 
Show unmerged commits between two branches
Example: `git cherry branch1 branch2`

### git clean 
Remove untracked files from the

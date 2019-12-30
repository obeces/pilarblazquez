# Pilarblazquez.es web page

Generated with Jekyll: https://jekyllrb.com/.


## How to launch project for developing

First time:
  1. Install Ruby and Node if not it is in your machine
  2. Install gem Bundler and Jekyll, run (use sudo if it is necessary):
      gem install bundler jekyll
  3. Install ruby and node dependencies running:
      bundle install
      npm install
  4. Install gulp, run:
      npm install -g gulp
  5. Run
    - 'gulp dev' for develop

Next times:
  1. If all is installed, only run 'gulp dev' from jekyll folder for dev
  2. Run 'gulp edit' for enable admin panel for others machine in same network; next share your ip: 192.168.X.XXX:4000/admin
  3. Run 'bundle exec jekyll serve' for serve
  4. Run 'bundle exec jekyll build' for build and generate the &#95;site folder for production


### Write a post:

Follow the next steps for create a post:

1. Create a file inside of &#95;posts folder and name with this pattern:
  YYYY-MM-DD-the-title-of-the-post.md

2. Use this variables in the front matter block (see https://jekyllrb.com/docs/front-matter/ for more info):
  (wip)
  title: the-title-of-the-post  
  layout: post  
  author: Name Surname  
  image: /posts/2019/04/demo&#95;noruega.jpeg (path to main image)  
  imagealt: alt image  
  imagedesc: Title for the image  
  category: viajeros-por-el-mundo  
  meta: 'descripcion del post para los metas'  

3. Insert the rest of post: paragraphs, headers, images... You can see info about markdown syntax [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)  
Main snippets below:

  * link: [Nunc accumsan augue convallis](https://www.novutrip.com){:target='&#95;blank'}
  * bold: --> ```**Negrita**``` --> **Negrita**
  * italic: --> ```*italic*```  --> *italic*
  * ordered list:
  * unordered list:
  * image: --> ```![image alt](/assets/img/posts/2019/04/ushuaia.jpg)``` --> ![image alt](/assets/img/posts/2019/04/ushuaia.jpg)
  * heading second level: --> ```## heading2``` --> ## heading2
  * heading third level: --> ```## heading3``` --> ### heading3

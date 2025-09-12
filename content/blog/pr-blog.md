---
title: How to Create a Pull Request in an Open Source Project?
date: '2022-09-01T18:06:14.362Z'
categories: []
keywords: []
slug: >-
  /@furkanolkay/how-to-create-open-source-project-pr
tags: ["Blog","Flutter","Github"]

---

Hello everyone,

I wanted to share the Turkish version of the blog I wrote on my explaining how to create a **_PR_** in an open-source project.

### Let’s Examine the Original Project!

![pr_create_image](/blog/img/1__b8WahzGvaPd3W9nEyZprYQ.png)

First, let’s open the project we want to contribute to.

Each project has its own development rules defined by the project managers, and these rules are usually clearly stated in the **_README.md_** file.

It’s beneficial to read this before taking any action on the project.

![pr_create_image](/blog/img/1__QP1L7hFBL5mNCMgO7pv2kw.png)

### Now, Let’s See How to Access the Project!

To contribute to a project, you need to either be part of the project or take a **_fork_** of it and work on that **_fork_**, then create a **_PR_** from that **_fork_** to the project managers. For now, we are focusing on the **_pull request_**, so we will click the fork button at the top right of **_GitHub_** to **_fork_** the project.

![pr_create_image](/blog/img/1__JXEetYYoe81WiUeWPFbtDw.png) ![pr_create_image](/blog/img/1__G71ZsHj2Wz2x3M__U4aFQLA.png)

While making our developments, if there is a specific rule in the project, it would be correct to create a **_branch_** and follow the given templates. We can open a **_branch_** by following the project **_issues_**.

![pr_create_image](/blog/img/1__GT86s9NA3VoZW5GyvWmC4w.png)

Let’s clone the project we **_forked_**:

```bash
git clone <your-fork-url>
```

and download the project.

![pr_create_image](/blog/img/1__dXr7w4xQPyfreGH8Gb2DIw.png)

Let’s open the downloaded project and create a **_feature branch_** here. You can use the following terminal command to open a **_feature-based_** **_branch_**.
```bash
git branch -b feature/add-note
```

![pr_create_image](/blog/img/1__Iv__i__Fc4OKGeMxUzS__n2yw.png)

Now, let’s check the details of the open **_issue_**.

![pr_create_image](/blog/img/1__u5AtMgQNFIkfH__qNto1w__A.png)

Let’s simply complete the chosen topic.

![pr_create_image](/blog/img/1__NvUMrGzGlXVgHllRu5nqsQ.png)

Now that we have done the necessary work, we can start the **_PR_** process after making the required **_commits_**.

![pr_create_image](/blog/img/1__FMc4I34PwlH5t9yxm4Jszg.png)

Let’s push our **_commits_**!

![pr_create_image](/blog/img/1__FhsL1mJN86kU71a9lWod3g.png)

### Let’s Create the PR!

Now, when we open the source of the original project, we see a green **_Compare & Pull Request_** button.

![pr_create_image](/blog/img/1__b8WahzGvaPd3W9nEyZprYQ.png)

By clicking this button, we are greeted with a **_PR_** page. Here, we write about our work in the title section.

![pr_create_image](/blog/img/1__CM__exz7cXNbTzUmPUtMPBg.png)

By leaving the necessary comments, we can complete the **_PR_** creation process.

We can label the topic we selected earlier using the **_#_** symbol.

![pr_create_image](/blog/img/1__2YoiknNStzsjf9n3iqFROA.png)

By clicking **_Create pull request_**, we create our **_PR_**. We are greeted with a screen like this.

![pr_create_image](/blog/img/1__ZBXyMGTgDeOtMPXa2eWaTg.png)

Congratulations! Now all we have to do is wait for the people managing the project to review your contribution and get back to you.

And that brings us to the end of the blog.

---

*Interested in more development content? Check out my Flutter tutorials on [Flutter BloC + Freezed](/blog/bloc-flutter-blog/), [Flutter Drag & Drop](/blog/drag-drop-flutter-blog/), and [Flutter Stream Structure](/blog/stream_flutter-blog/). For comprehensive development resources, visit my [Resources](/resources/) page.*

#### Happy Coding to Everyone! 👋🏻
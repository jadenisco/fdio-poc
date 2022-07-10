---
title: "Kubernetes Networking"
description: "Even faster kubernetes clusters with Calico, VPP and memif"
date: "2022-02-06"
author: "Nathan Skrzypczak"
bottomnavbutton: {text: "Read More"}
categories: ["Kubernetes"]
---

**Is there a cheetah within your Calico?**

Kubernetes is great, containers are lightweight & disposable, networking is simple yet powerful. But when it comes to network oriented applications, oh that can be slow !

<!--more-->

That's how the Calico/VPP integration first came up, as a way to address performance bottlenecks, making VPP's performance the motor of Calico's functionalities in Kubernetes. It speeds up container networking, but also allows us to expose even faster functionalities directly to the applications. So with this in place, how can we go even faster, while still preserving the Kubernetes abstractions ?

We'll present how applications can leverage userspace interfaces, what this allows regarding network performance & additional functionalities and how the Calico/VPP integration makes this happen under the hood.

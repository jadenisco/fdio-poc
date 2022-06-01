---
title: "Kubernetes Networking"
description: "Even faster kubernetes clusters with Calico, VPP and memif"
date: "2022-02-06"
author: "Nathan Skrzypczak"
feature_image: "/images/kubernetes-networking.png"
topnavbutton: {text: "Download PDF", url: "https://fosdem.org/2022/schedule/event/kubernetes_networking_is_there_a_cheetah/attachments/slides/5080/export/events/attachments/kubernetes_networking_is_there_a_cheetah/slides/5080/FOSDEM_2022_Calico_VPP_is_there_a_cheetah_within_your_Calico.pdf" }
bottomnavbutton: {text: "Read More"}
---

**Is there a cheetah within your Calico?**

Kubernetes is great, containers are lightweight & disposable, networking is simple yet powerful. But when it comes to network oriented applications, oh that can be slow !

<!--more-->

That's how the Calico/VPP integration first came up, as a way to address performance bottlenecks, making VPP's performance the motor of Calico's functionalities in Kubernetes. It speeds up container networking, but also allows us to expose even faster functionalities directly to the applications. So with this in place, how can we go even faster, while still preserving the Kubernetes abstractions ?

We'll present how applications can leverage userspace interfaces, what this allows regarding network performance & additional functionalities and how the Calico/VPP integration makes this happen under the hood.

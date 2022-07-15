---
title: "Calico/VPP"
description: "Kubernetes networking with boosters"
date: "2021-07-22"
author: "Nathan Skrzypczak"
bottomnavbutton: {text: "Read More"}
categories: ["VPP"]
---

Kubernetes has become the de facto solution when it comes to container networking, providing rich functionalities and abstractions.  But some classes of workloads put a huge performance burden on these implementations.

<!--more-->

Think big data, storage, analytics,
5G, virtual network functions, requiring encryption at a 40Gbps line rate, or multiple million of packets per second. Typically applications that are used to having dedicated NICs and physical hardware. In order to address this, we took the best of both worlds, combining Calico, the popular cloud native Kubernetes network plugin, with VPP, a very fast and scalable userspace packet processing software. In this talk we will cover how we provide line rate networking for those applications while keeping kubernetes benefits, and what super powers this enables us to bring to the pods.

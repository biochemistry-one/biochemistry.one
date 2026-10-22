---
title: 胆固醇
description: 从甲羟戊酸途径到低密度脂蛋白受体、PCSK9和胆汁酸，介绍人体细胞如何合成、感知、摄取和清除胆固醇。
summary: 胆固醇是一种蜡状脂质，为人体细胞构建膜结构所必需，人体还将其转化为类固醇激素、胆汁酸和维生素D。细胞既能自行合成胆固醇，也能从血液中的低密度脂蛋白（LDL）颗粒摄取胆固醇；当细胞内部一种膜结构中的胆固醇超过阈值时，一种起感受器作用的蛋白质会同时关闭这两种来源。
section: metabolism
order: 5
updated: 2026-10-21
related:
  - medicines/statins
  - medicines/ezetimibe
  - medicines/pcsk9-inhibitors
  - medicines/bile-acid-sequestrants
  - foods/eggs
---

## 胆固醇的作用

胆固醇是一种性质类似脂肪的分子，为人体细胞构建膜结构所必需，人体还将其转化为类固醇激素、胆汁酸和维生素D[@goldstein-2015-century; @mitsche-2015-flux]。

## 合成：甲羟戊酸途径

细胞以二碳单位乙酰辅酶A为原料，经30余步酶促反应合成胆固醇[@goldstein-2015-century; @mitsche-2015-flux]。

::pathway{id="mevalonate"}

HMG-CoA还原酶是内质网膜上的一种酶，催化该途径的限速步骤[@uniprot-2025-uniprotkb; @brown-2018-scap]。[他汀类药物](/medicines/statins/)抑制这一反应[@uniprot-2025-uniprotkb]。

## 固醇感知：SREBP-2、SCAP与INSIG

细胞根据其内部一种膜结构——内质网——的胆固醇含量，开启或关闭与胆固醇合成和摄取相关的基因[@radhakrishnan-2008-threshold; @brown-2018-scap]。

内质网胆固醇含量低时，SCAP将转录因子SREBP-2转运至高尔基体[@brown-2018-scap]。在高尔基体中，两种蛋白酶从SREBP-2上释放出一个结构域，该结构域激活低密度脂蛋白（LDL）受体基因和胆固醇生物合成酶基因[@brown-2018-scap; @goldstein-2015-century]。内质网胆固醇含量升高时，SCAP与胆固醇及INSIG结合，所形成的复合物滞留于内质网[@brown-2018-scap]。在中国仓鼠卵巢细胞中，内质网胆固醇一旦超过内质网脂质的约5 mol%，SREBP-2的加工便骤然减少[@radhakrishnan-2008-threshold]。在一个以仓鼠和小鼠实验为基础的模型中，他汀类药物降低肝细胞内质网胆固醇，激活SREBP-2，增加LDL受体数量，并降低血浆LDL水平[@goldstein-2015-century]。

## 摄取：低密度脂蛋白受体

胆固醇在血液中主要由低密度脂蛋白颗粒运载，细胞经由其表面的一种受体摄取这些颗粒[@goldstein-2015-century; @uniprot-2025-uniprotkb]。

大部分LDL由肝细胞上的受体清除[@goldstein-2015-century]。家族性高胆固醇血症杂合子的功能性受体数量为正常人的一半，LDL水平约为正常人的两倍[@goldstein-2015-century]。

## PCSK9

PCSK9是由肝脏分泌的一种蛋白质，它使肝细胞上的LDL受体数量减少，从而升高血液中的LDL水平[@goldstein-2015-century; @lagace-2006-pcsk9]。

PCSK9与LDL受体结合后，受体不再返回细胞表面，而是被降解[@lagace-2006-pcsk9; @goldstein-2015-century; @uniprot-2025-uniprotkb]。携带PCSK9无义突变Y142X或C679X的杂合子非裔美国人，LDL水平低28%，心脏病发作减少88%[@goldstein-2015-century]。

## 吸收：NPC1L1

小肠内壁的细胞通过一种膜蛋白NPC1L1，吸收肠道内的部分胆固醇[@brown-2018-scap; @uniprot-2025-uniprotkb]。

## 清除：胆汁酸与胆固醇逆向转运

大多数组织不能分解胆固醇[@rader-2009-rct]。在胆固醇逆向转运过程中，胆固醇由高密度脂蛋白（HDL）运回肝脏[@rader-2009-rct]。肝脏将胆固醇分泌入胆汁，分泌的形式为原形胆固醇或胆汁酸[@rader-2009-rct]。

在胆固醇的分解中，转化为胆汁酸约占90%[@russell-2009-bile-acids]。胆固醇7α-羟化酶（*CYP7A1*）催化胆汁酸合成经典途径的第一步，也是限速步骤[@russell-2009-bile-acids; @uniprot-2025-uniprotkb]。胆汁酸结合树脂增加粪便中胆汁酸的排泄，并降低血浆胆固醇[@russell-2009-bile-acids]；参见[胆汁酸螯合剂](/medicines/bile-acid-sequestrants/)。

:::industry
默沙东（Merck）与先灵葆雅（Schering-Plough）共同销售[依折麦布](/medicines/ezetimibe/)，这两家公司的员工确定NPC1L1为该药的直接靶点[@garcia-calvo-2005-ezetimibe]。一项遗传学研究的经费部分来自默沙东提供的研究者发起研究资助[@stitziel-2014-npc1l1]。该研究中，携带一个*NPC1L1*失活突变者的LDL胆固醇比非携带者低12 mg/dl（0.31 mmol/l）[@stitziel-2014-npc1l1]。携带者发生冠心病的比值比为0.47（95%置信区间0.25～0.87）[@stitziel-2014-npc1l1]。
:::

:::consensus
欧洲动脉粥样硬化学会共识专家组于2017年得出结论：LDL是动脉粥样硬化性心血管疾病的病因[@ference-2017-ldl-causes]。在纳入逾200万名参与者的荟萃分析中，风险随LDL胆固醇绝对暴露量的增加呈对数线性上升[@ference-2017-ldl-causes]。
:::

:::unresolved
HDL是否通过胆固醇逆向转运保护人体动脉，尚无定论[@goldstein-2015-century; @rader-2009-rct]。携带*LIPG*变异Asn396Ser者的HDL胆固醇比非携带者高0.14 mmol/l，但心肌梗死风险未见降低（比值比0.99，95%置信区间0.88～1.11）[@voight-2012-hdl]。胆固醇流出能力是在离体条件下对胆固醇逆向转运中某一步骤的测量指标[@rohatgi-2014-efflux]。在达拉斯心脏研究中，中位随访9.4年期间，流出能力最低四分位组的602名参与者中有49名（8.1%）发生动脉粥样硬化性心血管事件，而最高四分位组为602名中的22名（3.7%）[@rohatgi-2014-efflux]。未经校正的差值为4.5个百分点，校正后的风险比为0.33（0.19～0.55）[@rohatgi-2014-efflux]。
:::

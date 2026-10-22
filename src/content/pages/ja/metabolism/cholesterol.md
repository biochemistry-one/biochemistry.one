---
title: コレステロール
description: ヒトの細胞によるコレステロールの合成、感知、取り込み、排出の仕組みを、メバロン酸経路からLDL受容体、PCSK9、胆汁酸まで解説する。
summary: コレステロールはろうのような脂質である。ヒトの細胞は膜の材料としてコレステロールを必要とし、体内ではこれがステロイドホルモン、胆汁酸、ビタミンDに変換される。細胞はコレステロールを自ら合成するとともに血液中のLDL粒子から取り込み、細胞内の膜の一つでコレステロールが一定量を超えると、センサー蛋白質がこの二つの供給をともに止める。
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

## コレステロールの役割

コレステロールは脂肪に似た分子で、ヒトの細胞の膜に欠かせない成分であり、体内でステロイドホルモン、胆汁酸、ビタミンDに変換される[@goldstein-2015-century; @mitsche-2015-flux]。

## 合成：メバロン酸経路

細胞は、炭素原子2個からなる単位であるアセチルCoAから、30を超える酵素反応を経てコレステロールを合成する[@goldstein-2015-century; @mitsche-2015-flux]。

::pathway{id="mevalonate"}

HMG-CoA還元酵素は小胞体（ER）膜の酵素で、律速段階を触媒する[@uniprot-2025-uniprotkb; @brown-2018-scap]。[スタチン](/medicines/statins/)はこの反応を阻害する[@uniprot-2025-uniprotkb]。

## ステロールの感知：SREBP-2、SCAP、INSIG

細胞は、内部の膜の一つである小胞体のコレステロール含量に応じて、コレステロールの合成と取り込みにかかわる遺伝子をオンまたはオフに切り替える[@radhakrishnan-2008-threshold; @brown-2018-scap]。

小胞体のコレステロールが少ないとき、SCAPは転写因子SREBP-2をゴルジ体へ輸送する[@brown-2018-scap]。ゴルジ体では2種類のプロテアーゼがSREBP-2から一つのドメインを切り離し、このドメインがLDL受容体とコレステロール生合成酵素の遺伝子を活性化する[@brown-2018-scap; @goldstein-2015-century]。小胞体のコレステロールが増えると、SCAPはコレステロールおよびINSIGと結合し、この複合体は小胞体にとどまる[@brown-2018-scap]。チャイニーズハムスター卵巣細胞では、小胞体のコレステロールが小胞体脂質の約5 mol%を超えると、SREBP-2のプロセシングが急激に低下した[@radhakrishnan-2008-threshold]。ハムスターとマウスの実験に基づくモデルでは、スタチンは肝細胞の小胞体に含まれるコレステロールを減らし、SREBP-2を活性化してLDL受容体を増やし、血漿LDLを低下させる[@goldstein-2015-century]。

## 取り込み：LDL受容体

血液中のコレステロールは主に低密度リポ蛋白（LDL）粒子に含まれて運ばれ、細胞はこの粒子を表面の受容体を介して取り込む[@goldstein-2015-century; @uniprot-2025-uniprotkb]。

LDLの大部分は肝臓の受容体によって血中から除去される[@goldstein-2015-century]。家族性高コレステロール血症のヘテロ接合体では、機能する受容体の数が半分で、LDLは正常の約2倍である[@goldstein-2015-century]。

## PCSK9

PCSK9は肝臓から分泌される蛋白質で、肝細胞のLDL受容体の数を減らし、その結果として血液中のLDLを増やす[@goldstein-2015-century; @lagace-2006-pcsk9]。

PCSK9がLDL受容体に結合すると、受容体は細胞表面に戻らずに分解される[@lagace-2006-pcsk9; @goldstein-2015-century; @uniprot-2025-uniprotkb]。ナンセンス変異Y142XまたはC679Xをヘテロ接合でもつアフリカ系アメリカ人では、LDLが28%低く、心筋梗塞が88%少なかった[@goldstein-2015-century]。

## 吸収：NPC1L1

小腸の内面を覆う細胞は、腸管内のコレステロールの一部を、膜蛋白質NPC1L1を介して吸収する[@brown-2018-scap; @uniprot-2025-uniprotkb]。

## 排出：胆汁酸とコレステロール逆転送

ほとんどの組織はコレステロールを分解できない[@rader-2009-rct]。コレステロール逆転送では、コレステロールは高密度リポ蛋白（HDL）に含まれて肝臓へ戻る[@rader-2009-rct]。肝臓はこれをそのまま、または胆汁酸に変えて胆汁中に分泌する[@rader-2009-rct]。

コレステロールの分解の約90%は胆汁酸への変換による[@russell-2009-bile-acids]。コレステロール7α-水酸化酵素（*CYP7A1*）は、古典的経路の第一段階であり律速段階である反応を触媒する[@russell-2009-bile-acids; @uniprot-2025-uniprotkb]。胆汁酸結合樹脂は糞便中への胆汁酸の排泄を増やし、血漿コレステロールを低下させる[@russell-2009-bile-acids]。[胆汁酸吸着薬](/medicines/bile-acid-sequestrants/)も参照。

:::industry
[エゼチミブ](/medicines/ezetimibe/)を共同販売するメルク社とシェリング・プラウ社の社員が、NPC1L1をエゼチミブの直接の標的として同定した[@garcia-calvo-2005-ezetimibe]。ある遺伝学的研究は、資金の一部をメルク社の研究者主導研究助成金から得ていた[@stitziel-2014-npc1l1]。この研究では、*NPC1L1*の不活性化変異を1つもつ保因者のLDLコレステロールは、非保因者より12 mg/dl（0.31 mmol/l）低かった[@stitziel-2014-npc1l1]。保因者の冠動脈疾患のオッズ比は0.47（95%信頼区間0.25～0.87）であった[@stitziel-2014-npc1l1]。
:::

:::consensus
欧州動脈硬化学会のコンセンサスパネルは2017年、LDLが動脈硬化性心血管疾患の原因であると結論した[@ference-2017-ldl-causes]。参加者が200万人を超えるメタアナリシスでは、そのリスクはLDLコレステロールへの曝露の絶対量に応じて対数線形的に上昇した[@ference-2017-ldl-causes]。
:::

:::unresolved
HDLがコレステロール逆転送を介してヒトの動脈を保護するかどうかは確立されていない[@goldstein-2015-century; @rader-2009-rct]。*LIPG*のバリアントAsn396Serの保因者は、非保因者よりHDLコレステロールが0.14 mmol/l高かったが、心筋梗塞のリスクは低くなかった（オッズ比0.99、95%信頼区間0.88～1.11）[@voight-2012-hdl]。コレステロール引き抜き能は、コレステロール逆転送の一段階をex vivoで測定する指標である[@rohatgi-2014-efflux]。ダラス心臓研究（Dallas Heart Study）では、追跡期間中央値9.4年の間に、動脈硬化性心血管イベントが引き抜き能の最低四分位群で602人中49人（8.1%）、最高四分位群で602人中22人（3.7%）に発生した[@rohatgi-2014-efflux]。未調整の差は4.5パーセントポイント、調整ハザード比は0.33（0.19～0.55）であった[@rohatgi-2014-efflux]。
:::
